import { Link } from "react-router-dom";
import "./navbar.scss";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <span>
            <b>C</b>ar
          </span>
          <span>
            <b>Z</b>one
          </span>
        </Link>
      </div>
      <div className="right">
        <div className="user">
          <FaUser />
          <div className="userAuth">
            <Link to={"/login"}>Login</Link>
            <span>|</span>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
        <div className="sell">
          <Link to={"/sell"}>
            <FaPlus /> Start Selling
          </Link>
        </div>
      </div>
    </div>
  );
}
