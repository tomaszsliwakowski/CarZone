import { useState } from "react";

import { emailValidator, passwordValidator } from "../utils/validators";

export type AuthFormType = {
  email: string;
  password: string;
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
  });

  const validateForm = ({ form, field }: ValidateProps) => {
    const { email, password } = form;
    let isValid: boolean = true;

    if (field === "email") {
      const emailMessage: string = emailValidator(email);
      if (emailMessage !== "") {
        isValid = true;
        setErrors((prev) => ({
          ...prev,
          [field]: { error: true, message: emailMessage },
        }));
      }
    }
    if (field === "password") {
      const passwordMessage: string = passwordValidator(password);
      if (passwordMessage !== "") {
        isValid = true;
        setErrors((prev) => ({
          ...prev,
          [field]: { error: true, message: passwordMessage },
        }));
      }
    }
  };

  const onBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.name;
    validateForm({ form, field });
  };

  return { onBlurField, errors, validateForm };
};
