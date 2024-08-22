import axios, { AxiosError, AxiosResponse } from "axios";

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
    apiRequest
      .get(BASE_API_PREFIX + url)
      .then(responseBody)
      .catch((err: AxiosError) => {
        const response = err.response as AxiosResponse;
        if (response) {
          return {
            message: response.data.errors
              ? response.data.errors[0].description
              : response.data,
          };
        }
      }),
  post: (url: string, body: {}) =>
    apiRequest
      .post(BASE_API_PREFIX + url, body)
      .then(responseBody)
      .catch((err: AxiosError) => {
        const response = err.response as AxiosResponse;
        if (response) {
          return {
            message: response.data.errors
              ? response.data.errors[0].description
              : response.data,
          };
        }
      }),
  put: (url: string, body: {}) =>
    apiRequest
      .put(BASE_API_PREFIX + url, body)
      .then(responseBody)
      .catch((err: AxiosError) => {
        const response = err.response as AxiosResponse;
        if (response) {
          return {
            message: response.data.errors
              ? response.data.errors[0].description
              : response.data,
          };
        }
      }),
  delete: (url: string) =>
    apiRequest
      .delete(BASE_API_PREFIX + url)
      .then(responseBody)
      .catch((err: AxiosError) => {
        const response = err.response as AxiosResponse;
        if (response) {
          return {
            message: response.data.errors
              ? response.data.errors[0].description
              : response.data,
          };
        }
      }),
};
