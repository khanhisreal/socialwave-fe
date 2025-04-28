import axios from "axios";
import { getAuthToken } from "../util/auth";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

//automatically attach token to all outgoing requests
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
