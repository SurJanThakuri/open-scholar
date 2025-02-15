import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { removeItem } from "../storage/localStorageHandler";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

export const refreshAccessToken = async (
  user: any,
  setUser: (user: any | null) => void
): Promise<any | false> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/refresh-token`,
      { refreshToken: user.refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );

    const { accessToken } = response.data.data;

    const updatedToken = {
      accessToken,
      refreshToken: user.refreshToken,
      userData: user.userData,
    };

    setUser(updatedToken);
    return updatedToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    removeItem("user");
    return false;
  }
};
