import { Container } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import NavBar from "../../shared/components/NavBar";
import Posts from "./Posts";
import { getPosts } from "../../services/firebase/post";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
  }, [setPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <NavBar />
      <Container>
        <CreatePost onPostCreate={fetchPosts} />
        <Posts posts={posts} onDeletePost={fetchPosts} />
      </Container>
    </>
  );
}

export default Home;
