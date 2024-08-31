import { FaPlus, FaUser } from "react-icons/fa";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { UserType } from "../../context/authContext";

type PROPS = {
  menuOpen: boolean;
  switchMenuHandler: Function;
  currentUser: UserType | null;
  logout: Function;
};

export default function Menu({
  menuOpen,
  switchMenuHandler,
  currentUser,
  logout,
}: PROPS) {
  return (
    <div className="right">
      <div className="user">
        {currentUser ? (
          <>
            <Link to={"/profile"} className="logged">
              <FaUser />
              <p className="userName">
                {currentUser.username || currentUser.email || "User"}
              </p>
            </Link>
            <button onClick={() => logout()} className="logout">
              Logout
            </button>
          </>
        ) : (
          <>
            <FaUser />
            <div className="userAuth">
              <Link to={"/auth?type=login"}>Login</Link>
              <span>|</span>
              <Link to={"/auth?type=register"}>Register</Link>
            </div>
          </>
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
