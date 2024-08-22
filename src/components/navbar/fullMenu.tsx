import { Link } from "react-router-dom";
import "./navbar.scss";
import { FaPlus } from "react-icons/fa";

export default function FullMenu() {
  return (
    <div className="fullMenu">
      <Link to={"/sell"}>
        <FaPlus /> Start Selling
      </Link>
      <Link to={"/auth?type=login"}>Login</Link>
      <Link to={"/auth?type=register"}>Register</Link>
    </div>
  );
}
