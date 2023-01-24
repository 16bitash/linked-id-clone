import { useCallback, useEffect, useState } from "react";
import CreatePost from "../CreatePost";
import NavBar from "../NavBar";
import Posts from "../Posts";
import { getPosts } from "../services/post";
import "./App.css";

function App() {
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
      <CreatePost onPostCreate={fetchPosts} />
      <Posts posts={posts} />
    </>
  );
}

export default App;
