import { ReactNode, createContext, useEffect, useState } from "react";
import { UsersServices } from "../services/user.service";
import { AxiosResponse } from "axios";

export type UserType = {
  id: string;
  email: string;
  username: string;
  createdDate: Date;
  isAdmin: boolean;
};

export type UserAuth = {
  currentUser: UserType | null;
  isLoading: boolean;
  updateUser: Function;
};

export const AuthContext = createContext<UserAuth>({
  currentUser: null,
  isLoading: true,
  updateUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const request = async () => {
    await UsersServices.checkLogged().then((res: AxiosResponse) => {
      const response = res.data;
      const user = response.user;
      if (user) {
        userHandler({
          id: user.id,
          email: user.email,
          username: user.userName,
          createdDate: user.createdDate,
          isAdmin: user.isAdmin,
        });
        updateLoading(false);
      }
    });
  };

  const updateLoading = (action: boolean) => {
    setIsLoading(action);
  };

  const userHandler = (user: UserType) => {
    setCurrentUser(user);
  };

  const updateUser = () => {
    request();
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
