import axios, { AxiosResponse } from "axios";

export interface resposnePayload {
  success: boolean;
  message: string;
  result: any;
}

const BASE_API_URL = "http://localhost:5168";
const BASE_API_PREFIX = "/api/AuthWeb";

export const apiRequest = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) =>
    apiRequest.get(BASE_API_PREFIX + url).then(responseBody),
  post: (url: string, body: {}) =>
    apiRequest.post(BASE_API_PREFIX + url, body).then(responseBody),
  put: (url: string, body: {}) =>
    apiRequest.put(BASE_API_PREFIX + url, body).then(responseBody),
  delete: (url: string) =>
    apiRequest.delete(BASE_API_PREFIX + url).then(responseBody),
};
