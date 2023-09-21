import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

export const PrivateRoutes = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  if (currentUser) {
    // User is already logged in
    if (location.pathname === "/register") {
      // Redirect to profile if trying to access the register page
      navigate("/profile");
    }
  } else {
    // User is not logged in, redirect to the login page for all routes
    redirect("/login");
  }
  return <Outlet />;
};
