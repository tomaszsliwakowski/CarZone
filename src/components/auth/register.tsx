import { useState } from "react";
import "./auth.scss";
import AuthFormBody from "./authFormBody";
import {
  AuthFormType,
  useAuthFormValidator,
} from "../../hooks/useAuthFormValidator";
import StatuteCheckbox from "./statute";

export default function Register() {
  const [form, setForm] = useState<AuthFormType>({
    email: "",
    password: "",
  });
  const [statute, setStatue] = useState<boolean>(false);
  const { errors, validateForm, onBlurField } = useAuthFormValidator(form);

  const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    const newForm: AuthFormType = { ...form, [field]: e.target.value };
    validateForm({ form: newForm, field });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form className="registerForm">
      <AuthFormBody
        onUpdateField={onUpdateField}
        onBlurField={onBlurField}
        form={form}
        errors={errors}
      />
      <StatuteCheckbox />
      <div className="register__action">
        <button type="submit">
          <span>Register</span>
        </button>
      </div>
    </form>
  );
}
