import "./auth.scss";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function AuthOptions() {
  return (
    <div className="auth__options">
      <ul>
        <li>
          <FaFacebook />
          <p>Continue via Facebook</p>
        </li>
        <li>
          <FaGoogle />
          <p>Continue via Google</p>
        </li>
        <li>
          <FaApple />
          <p>Continue via Apple</p>
        </li>
      </ul>
      <div className="auth__other">
        <p>OR</p>
      </div>
    </div>
  );
}
