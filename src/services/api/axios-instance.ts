import axios, { AxiosInstance } from "axios";
import { API_KEY, API_URL } from "../../config/properties";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "x-api-secret": API_KEY,
  },
});

export const setToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.authorization;
  }
};
