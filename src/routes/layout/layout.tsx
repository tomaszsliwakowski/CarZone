import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function Layout() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export function RequireAuth() {
  const { currentUser, isLoading } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/auth?type=login" />
  ) : (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
