import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  const location = useLocation()

  if (currentUser && location.pathname === "/register") {
    // User is already logged in and trying to access the register page
    return <Navigate to="/profile" />;
  }

  if (!currentUser && location.pathname !== "/register") {
    // User is not logged in and not on the register page
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
