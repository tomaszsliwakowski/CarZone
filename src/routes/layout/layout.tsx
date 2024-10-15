import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Toaster } from "react-hot-toast";

export function Layout() {
  return <LayoutBody />;
}
export function RequireAuth() {
  const { currentUser, isLoading } = useContext(AuthContext);
  console.log(currentUser, isLoading);
  return !currentUser && !isLoading ? (
    <Navigate to="/auth?type=login" />
  ) : (
    <LayoutBody />
  );
}

function LayoutBody() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
