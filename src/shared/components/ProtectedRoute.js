import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;

  const auth = useSelector((state) => state.auth);

  if (!auth.userId && auth.isInitialized) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
