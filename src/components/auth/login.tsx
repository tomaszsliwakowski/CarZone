import React, { ChangeEvent, useContext, useState } from "react";
import "./auth.scss";
import AuthFormBody from "./authFormBody";
import {
  AuthFormType,
  useAuthFormValidator,
} from "../../hooks/useAuthFormValidator";
import { UsersServices } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AxiosError, AxiosResponse } from "axios";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const [form, setForm] = useState<AuthFormType>({
    email: "",
    password: "",
  });
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { errors, validateForm, onBlurField, onSubmitEmptyValidate } =
    useAuthFormValidator(form);

  const onUpdateField = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    const newForm: AuthFormType = { ...form, [field]: e.target.value };
    validateForm({ form: newForm, field });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error: boolean = onSubmitEmptyValidate(form);
    if (error) return;
    await UsersServices.login(form)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          const response = res.data;
          updateUser();
          navigate("/");
          toast.success(response.message);
        }
      })
      .catch((err: AxiosError) => {
        const response: any = err.response?.data;
        toast.error(response.message || response);
      });
  };
  return (
    <form className="loginForm" onSubmit={onSubmitForm}>
      <AuthFormBody
        onUpdateField={onUpdateField}
        onBlurField={onBlurField}
        form={form}
        errors={errors}
      />
      <div className="login__action">
        <button type="submit">
          <span>Log in</span>
        </button>
      </div>
    </form>
  );
}
