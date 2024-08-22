import { AuthFormType } from "../hooks/useAuthFormValidator";
import { requests, resposnePayload } from "./apiRequest";

export const UsersServices = {
  checkLogged: async (): Promise<resposnePayload> => {
    const checkLoggedRes = await requests.get("/logged");
    return checkLoggedRes;
  },
  register: async (user: AuthFormType): Promise<resposnePayload> => {
    const registerRes = await requests.post("/register", user);
    return registerRes;
  },
  login: async (user: AuthFormType): Promise<resposnePayload> => {
    const loginRes = await requests.post("/login", user);
    return loginRes;
  },
};
