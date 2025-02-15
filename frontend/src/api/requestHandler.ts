import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "./axiosInstance";
import { getItem } from "../utils/storage/localStorageHandler";
import { REQUESTMETHOD } from "../constants/Enums";

type HeaderType = {
  "Content-Type"?: string;
  Authorization?: string;
  "Accept"?: string;
};

export interface RequestParams {
  endpoint: string;
  method: REQUESTMETHOD;
  data?: any;
  header?: HeaderType;
  authenticated?: boolean;
  responseType?: "json" | "blob";
}

export const apiRequest = async ({
  endpoint,
  method,
  data,
  responseType = "json",
  header = {},
  authenticated = false,
}: RequestParams): Promise<any> => {
  const API_URL = import.meta.env.VITE_APP_API_URL as string;

  const config: AxiosRequestConfig = {
    method,
    url: `${API_URL}/${endpoint}`,
    headers: {
      ...header,
      "Content-Type": header["Content-Type"] || "application/json",
    },
    data,
    responseType,
  };



  if (authenticated) {
    const user = getItem("user");
    if (user && user.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${user.accessToken}`,
      };
    }
  }
  try {
    const response: AxiosResponse<any> = await api(config);

    // Handle responses based on `responseType`
    if (responseType === "blob") {
      if (response.data instanceof Blob) {
        return response.data;
      } else {
        throw new Error("Response is not a valid Blob");
      }
    }

    // Handle JSON responses
    if (response.data?.success !== undefined) {
      return response.data; // Assuming your API includes a `success` flag
    }

    // For non-standard APIs without a `success` flag
    return response.data;
  } catch (error: any) {
    const statusCode = error.response?.status;
    const errorMessage = error.response?.data?.message || error.message || "API request failed";

    // Optional: Log or handle specific error codes
    if (statusCode === 401 && authenticated) {
      console.error("Unauthorized - Token may have expired.");
      // Optionally, trigger logout or token refresh logic here
    }

    throw new Error(errorMessage);
  }
};
