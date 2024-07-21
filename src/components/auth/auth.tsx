import { useState } from "react";
import "./auth.scss";
import AuthOptions from "./authOptions";
import Login from "./login";
import Register from "./register";
import { useFilterParams } from "../../hooks/useFilterParams";

const loginType: string = "login";
const registerType: string = "register";

export default function Auth() {
  const { handleChange, searchParams } = useFilterParams();
  const paramsAuthType: string | null = searchParams.get("type");
  const [authType, setAuthType] = useState<string>(paramsAuthType || loginType);

  const authTypeHandler = (type: string) => {
    setAuthType(type);
    handleChange("type", type);
  };

  return (
    <div className="auth">
      <h1>Log in to continue</h1>
      <div className="container">
        <AuthOptions />
        <div className="auth__main">
          <div className="auth__main__options">
            <button
              className={authType === loginType ? "selected" : ""}
              onClick={() => authTypeHandler(loginType)}
            >
              Log in
            </button>
            <button
              className={authType === registerType ? "selected" : ""}
              onClick={() => authTypeHandler(registerType)}
            >
              Register
            </button>
          </div>
          {authType === loginType ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
