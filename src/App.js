import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Home from "./pages/Home";

import "./services/firebase/initialize";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase/initialize";
import { logUserIn, logUserOut } from "./redux/reducer/authSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);

  useEffect(() => {
    const handleAuthChange = (user) => {
      if (user) {
        dispatch(logUserIn({ email: user.email, userId: user.uid }));
        return;
      }

      dispatch(logUserOut());
    };

    const unsubscribe = onAuthStateChanged(auth, handleAuthChange);

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
