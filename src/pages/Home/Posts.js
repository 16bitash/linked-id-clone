import { Grid } from "@mui/material";
import { usePosts } from "./hooks";
import Post from "./Post";

const Posts = () => {
  const posts = usePosts();

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
