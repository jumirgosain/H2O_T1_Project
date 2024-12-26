import { Navigate, Outlet } from "react-router-dom";
interface ProtectedRouteProps {
    isAuthenticated : boolean
};
const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps): JSX.Element => {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />}</>;
};

export default ProtectedRoute;