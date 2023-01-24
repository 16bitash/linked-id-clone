import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts = querySnapshot.docs.map((doc) => doc.data());
      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post id={post.id} body={post.body} />
      ))}
    </>
  );
};

export default Posts;
