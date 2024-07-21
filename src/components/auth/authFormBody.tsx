import { useState } from "react";
import "./auth.scss";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { AuthFormType, ErrorsType } from "../../hooks/useAuthFormValidator";

type PROPS = {
  onUpdateField: Function;
  onBlurField: Function;
  form: AuthFormType;
  errors: ErrorsType;
};

export default function AuthFormBody({
  onUpdateField,
  onBlurField,
  form,
  errors,
}: PROPS) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="authForm__body">
      <div className="authForm__container">
        <label>E-mail</label>
        <div className="authForm__inputContainer">
          <input
            name="email"
            type="email"
            className={errors.email.error ? "error" : ""}
            pattern=".+@example\.com"
            size={30}
            required
            value={form.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onUpdateField(e)
            }
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurField(e)}
          />
          <div className="icons">
            {errors.email.error ? <FiAlertCircle className="alert" /> : null}
          </div>
        </div>
        <span className="error">{errors.email.message}</span>
      </div>
      <div className="authForm__container">
        <label>Password</label>
        <div className="authForm__inputContainer">
          <input
            name="password"
            type={visible ? "text" : "password"}
            className={errors.password.error ? "error" : ""}
            size={30}
            required
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onUpdateField(e)
            }
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurField(e)}
          />
          <div className="icons">
            {visible ? (
              <FaRegEyeSlash
                className="show"
                onClick={() => setVisible(false)}
              />
            ) : (
              <FaRegEye className="show" onClick={() => setVisible(true)} />
            )}
            {errors.password.error ? <FiAlertCircle className="alert" /> : null}
          </div>
        </div>
        <span className="error">{errors.password.message}</span>
      </div>
    </div>
  );
}
