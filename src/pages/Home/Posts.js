import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = (props) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
      {posts.map((post) => (
        <Grid item>
          <Post
            key={post.id}
            id={post.id}
            body={post.body}
            createdBy={post.createdBy}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
