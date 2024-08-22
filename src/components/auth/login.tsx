import React, { ChangeEvent, useState } from "react";
import "./auth.scss";
import AuthFormBody from "./authFormBody";
import {
  AuthFormType,
  useAuthFormValidator,
} from "../../hooks/useAuthFormValidator";
import { UsersServices } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState<AuthFormType>({
    email: "",
    password: "",
  });
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
    const loginRes = await UsersServices.login(form);
    console.log(loginRes);
    if (loginRes.success) {
      navigate("/");
      toast.success(loginRes.message);
    } else {
      toast.error(loginRes.message);
    }
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
