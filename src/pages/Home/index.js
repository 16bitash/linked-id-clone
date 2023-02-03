import { Container } from "@mui/material";

import CreatePost from "./CreatePost";
import NavBar from "../../shared/components/NavBar";
import Posts from "./Posts";

function Home() {
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
