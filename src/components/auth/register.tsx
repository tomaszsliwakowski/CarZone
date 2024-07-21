import "./auth.scss";
import AuthFormBody from "./authFormBody";

export default function Register() {
  return (
    <form className="registerForm">
      <AuthFormBody />
      <div className="register__action">
        <button type="submit">
          <span>Register</span>
        </button>
      </div>
    </form>
  );
}
