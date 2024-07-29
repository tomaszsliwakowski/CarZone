import { FaPlus, FaUser } from "react-icons/fa";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { UserType } from "../../context/authContext";

type PROPS = {
  menuOpen: boolean;
  switchMenuHandler: Function;
  currentUser: UserType | null;
};

export default function Menu({
  menuOpen,
  switchMenuHandler,
  currentUser,
}: PROPS) {
  return (
    <div className="right">
      <div className="user">
        <FaUser />
        {currentUser ? (
          <div className="userName">
            {currentUser.username || currentUser.email || "User"}
          </div>
        ) : (
          <div className="userAuth">
            <Link to={"/auth?type=login"}>Login</Link>
            <span>|</span>
            <Link to={"/auth?type=register"}>Register</Link>
          </div>
        )}
      </div>
      <div className="sell">
        <Link to={"/sell"}>
          <FaPlus /> Start Selling
        </Link>
      </div>
      <div className="menu">
        {menuOpen ? (
          <IoClose onClick={() => switchMenuHandler()} />
        ) : (
          <IoMenuOutline onClick={() => switchMenuHandler()} />
        )}
      </div>
    </div>
  );
}
