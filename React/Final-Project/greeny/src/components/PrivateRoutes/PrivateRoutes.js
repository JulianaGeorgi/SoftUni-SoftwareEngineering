import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export const PrivateRoutes = ({children, ...rest}) => {
  const {currentUser} = useAuth();

  return(
    currentUser ? <Outlet/> : <Navigate to="/login"/>
  )

}