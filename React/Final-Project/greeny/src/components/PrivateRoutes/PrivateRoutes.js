import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  const location = useLocation()

  if (currentUser) {
    // User is already logged in
    if (location.pathname === "/register") {
      // Redirect to profile if trying to access the register page
      return <Navigate to="/profile" />;
    }
  } else {
    // User is not logged in, redirect to the login page for all routes
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
