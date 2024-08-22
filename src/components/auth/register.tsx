import { useState } from "react";
import "./auth.scss";
import AuthFormBody from "./authFormBody";
import {
  AuthFormType,
  useAuthFormValidator,
} from "../../hooks/useAuthFormValidator";
import StatuteCheckbox from "./statute";
import { UsersServices } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [form, setForm] = useState<AuthFormType>({
    username: "",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedError, setCheckedError] = useState<boolean>(false);
  const navigate = useNavigate();

  const checkHandler = () => {
    setChecked((prev) => !prev);
    if (checkedError && !checked) setCheckedError(false);
  };
  const { errors, validateForm, onBlurField, onSubmitEmptyValidate } =
    useAuthFormValidator(form);

  const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    const newForm: AuthFormType = { ...form, [field]: e.target.value };
    validateForm({ form: newForm, field });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checked) {
      setCheckedError(true);
      return;
    }
    const error: boolean = onSubmitEmptyValidate(form);
    if (error) return;
    const registerRes = await UsersServices.register(form);
    if (registerRes.success) {
      navigate("/auth?type=login");
      toast.success(registerRes.message);
    } else {
      toast.error(registerRes.message);
    }
  };
  return (
    <form className="registerForm" onSubmit={onSubmitForm}>
      <AuthFormBody
        onUpdateField={onUpdateField}
        onBlurField={onBlurField}
        form={form}
        errors={errors}
      />
      <StatuteCheckbox
        checkHandler={checkHandler}
        checked={checked}
        error={checkedError}
      />
      <div className="register__action">
        <button type="submit">
          <span>Register</span>
        </button>
      </div>
    </form>
  );
}
