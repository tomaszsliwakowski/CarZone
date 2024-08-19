import { ReactNode, createContext, useEffect, useState } from "react";
import { apiRequest } from "../services/apiRequest";
import { AxiosResponse } from "axios";
import { UsersServices } from "../services/user.service";

export type UserType = {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
};

export type UserAuth = {
  currentUser: UserType | null;
  updateUser: Function;
  isLoading: boolean;
};

export const AuthContext = createContext<UserAuth>({
  currentUser: null,
  updateUser: () => {},
  isLoading: true,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateUser = (data: any) => {
    setCurrentUser(data);
  };

  const updateLoading = (action: boolean) => {
    setIsLoading(action);
  };
  useEffect(() => {
    const request = async () => {
      const checkLoggedRes = await UsersServices.checkLogged().then(() => {
        setIsLoading(false);
      });
    };
    request();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
