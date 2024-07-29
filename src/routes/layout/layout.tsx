import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export function RequireAuth() {
  const { currentUser, isLoading } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/auth?type=login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
