import { AxiosResponse } from "axios";
import { AuthFormType } from "../hooks/useAuthFormValidator";
import { apiRequest } from "./apiRequest";

export const UsersServices = {
  checkLogged: async (): Promise<AxiosResponse> => {
    const checkLoggedRes = await apiRequest.get("/logged");
    return checkLoggedRes;
  },
  register: async (user: AuthFormType): Promise<AxiosResponse> => {
    const registerRes = await apiRequest.post("/register", user);
    return registerRes;
  },
  login: async (user: AuthFormType): Promise<AxiosResponse> => {
    const loginRes = await apiRequest.post("/login", user);
    return loginRes;
  },
};
