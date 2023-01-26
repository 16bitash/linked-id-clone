import { Link } from "react-router-dom";
import NavBar from "../../shared/components/NavBar";

const User = () => {
  return (
    <>
      <NavBar />
      <div>user</div>
      <Link to="/">Go back to home</Link>
    </>
  );
};

export default User;
