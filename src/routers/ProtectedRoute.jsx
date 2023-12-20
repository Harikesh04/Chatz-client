import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth);
  const isAuthenticated = Boolean(user?.profile?.googleId);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
