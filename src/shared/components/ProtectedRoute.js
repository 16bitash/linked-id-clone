import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;

  const auth = useSelector((state) => state.auth);

  if (auth.userId) {
    return children;
  }

  return <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
