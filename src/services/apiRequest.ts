import axios from "axios";

const BASE_API_URL = "http://localhost:5168/api/AuthWeb";

export const apiRequest = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
