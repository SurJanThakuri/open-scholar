import axios, { AxiosResponse } from "axios";
import { processQueue, addToQueue } from "./tokenService";
import { refreshAccessToken, isTokenValid } from "../utils/auth/auth.utils";
import { getItem, removeItem, setItem  } from "../utils/storage/localStorageHandler";

const API_URL = import.meta.env.VITE_APP_API_URL as string;

const api = axios.create({
  baseURL: API_URL,
});

let isRefreshing = false;

api.interceptors.request.use(
  (config) => {
    const user = getItem("user");
    if (user && config.headers) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 400 && !originalRequest._retry) {
      const user = getItem("user");
      const token = user?.accessToken;

      if (token && isTokenValid(token)) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return addToQueue(originalRequest);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = user?.refreshToken;
        if (!refreshToken) {
          removeItem("user");
          return Promise.reject(error);
        }

        const refreshedToken = await refreshAccessToken(user, (updatedUser: any) => {
          setItem("user", updatedUser);
        });

        if (refreshedToken) {
          originalRequest.headers.Authorization = `Bearer ${refreshedToken.accessToken}`;
          processQueue(null, refreshedToken.accessToken);
          return api(originalRequest);
        } else {
          throw new Error("Token refresh failed");
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
