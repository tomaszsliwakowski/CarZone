import React, { ChangeEvent, useState } from "react";
import "./auth.scss";
import AuthFormBody from "./authFormBody";
import {
  AuthFormType,
  useAuthFormValidator,
} from "../../hooks/useAuthFormValidator";

export default function Login() {
  const [form, setForm] = useState<AuthFormType>({
    email: "",
    password: "",
  });
  const { errors, validateForm, onBlurField } = useAuthFormValidator(form);

  const onUpdateField = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    const newForm: AuthFormType = { ...form, [field]: e.target.value };
    validateForm({ form: newForm, field });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email === "") {
      validateForm({ form, field: "email" });
    }
    if (form.password === "") {
      validateForm({ form, field: "password" });
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
