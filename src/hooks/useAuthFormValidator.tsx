import { useState } from "react";

import { emailValidator, passwordValidator } from "../utils/validators";

export type AuthFormType = {
  email: string;
  password: string;
  username?: string;
};

type ValidateProps = {
  form: AuthFormType;
  field: string;
};

export type ErrorsType = {
  email: {
    error: boolean;
    message: string;
  };
  password: {
    error: boolean;
    message: string;
  };
  username: {
    error: boolean;
    message: string;
  };
};

export const useAuthFormValidator = (form: AuthFormType) => {
  const [errors, setErrors] = useState<ErrorsType>({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
    username: {
      error: false,
      message: "",
    },
  });

  const validateForm = ({ form, field }: ValidateProps) => {
    const { email, password, username } = form;

    switch (field) {
      case "email":
        const emailMessage: string = emailValidator(email);
        if (emailMessage !== "") {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: true, message: emailMessage },
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: false, message: "" },
          }));
        }
        break;
      case "password":
        const passwordMessage: string = passwordValidator(password);
        if (passwordMessage !== "") {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: true, message: passwordMessage },
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: false, message: "" },
          }));
        }
        break;
      case "username":
        if (username && username !== "" && username.split("").length > 2) {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: false, message: "" },
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [field]: { error: true, message: "Username is required" },
          }));
        }
        break;
      default:
        break;
    }
  };

  const onSubmitEmptyValidate = (form: AuthFormType): boolean => {
    let errorState = false;
    Object.values(form).forEach((el, id) => {
      const field: string = Object.keys(form)[id];
      if (el === "") {
        setErrors((prev) => ({
          ...prev,
          [field]: { error: true, message: `${field} is required` },
        }));
        errorState = true;
      }
    });
    return errorState;
  };

  const onBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.name;
    validateForm({ form, field });
  };

  return { onBlurField, errors, validateForm, onSubmitEmptyValidate };
};
