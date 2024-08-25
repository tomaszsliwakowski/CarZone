import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import FullMenu from "./fullMenu";
import Menu from "./menu";
import { UsersServices } from "../../services/user.service";
import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const switchMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };
  const logout = async () => {
    await UsersServices.logout()
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          navigate("/");
          toast.success(res.data.message);
          updateUser();
        }
      })
      .catch((err: AxiosError) => {
        const response = err.response;
        if (response) {
          toast.error(response.statusText);
        }
      });
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
          logout={logout}
        />
      )}
      {menuOpen && pathname !== "/auth" ? (
        <FullMenu currentUser={currentUser} logout={logout} />
      ) : null}
    </div>
  );
}
