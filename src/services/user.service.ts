import { requests, resposnePayload } from "./apiRequest";

export const UsersServices = {
  checkLogged: async (): Promise<resposnePayload> => {
    const checkLoggedRes = await requests.get("/logged");
    return checkLoggedRes;
  },
};
