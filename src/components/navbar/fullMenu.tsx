import { Link } from "react-router-dom";
import "./navbar.scss";
import { FaPlus, FaUser } from "react-icons/fa";
import { UserType } from "../../context/authContext";

type PROPS = {
  currentUser: UserType | null;
  logout: Function;
};

export default function FullMenu({ currentUser, logout }: PROPS) {
  return (
    <div className="fullMenu">
      {currentUser ? (
        <>
          <div className="user">
            <FaUser />
            <p className="userName">
              {currentUser.username || currentUser.email || "User"}
            </p>
          </div>
          <button onClick={() => logout()} className="logout">
            Logout
          </button>
        </>
      ) : null}
      <Link to={"/create-offer"}>
        <FaPlus /> Start Selling
      </Link>
      {!currentUser ? (
        <>
          <Link to={"/auth?type=login"}>Login</Link>
          <Link to={"/auth?type=register"}>Register</Link>
        </>
      ) : null}
    </div>
  );
}
