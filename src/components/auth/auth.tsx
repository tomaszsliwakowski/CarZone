import "./auth.scss";
import AuthOptions from "./authOptions";

export default function Auth() {
  return (
    <div className="auth">
      <h1>Log in to continue</h1>
      <div className="container">
        <AuthOptions />
        <div className="auth__main">
          <div className="auth__main__options">
            <button className="selected">Log in</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
