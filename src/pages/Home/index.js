import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CreatePost from "./CreatePost";
import NavBar from "../../shared/components/NavBar";
import Posts from "./Posts";
import { fetchPostsAsync } from "../../redux/slices/postSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync);
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <CreatePost />
        <Posts />
      </Container>
    </>
  );
}

export default Home;
