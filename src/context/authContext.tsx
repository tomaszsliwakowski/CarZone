import { ReactNode, createContext, useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";

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
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateUser = (data: UserType | null) => {
    setCurrentUser(data);
  };

  const updateLoading = (action: boolean) => {
    setIsLoading(action);
  };
  useEffect(() => {
    const request = async () => {
      await apiRequest
        .get("")
        .then((res) => {
          // updateUser(res.data);
          //  updateLoading(false);
        })
        .catch(() => {
          //updateLosding(false);
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
