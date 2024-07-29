import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import FullMenu from "./fullMenu";
import Menu from "./menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { currentUser } = useContext(AuthContext);

  const switchMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

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
      {pathname && pathname === "/auth" ? null : (
        <Menu
          switchMenuHandler={switchMenuHandler}
          menuOpen={menuOpen}
          currentUser={currentUser}
        />
      )}
      {menuOpen && pathname !== "/auth" ? <FullMenu /> : null}
    </div>
  );
}
