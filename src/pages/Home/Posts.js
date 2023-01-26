import { Grid } from "@mui/material";
import Post from "./Post";

const Posts = (props) => {
  const { posts, onDeletePost } = props;

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
        {posts.map((post) => (
          <Grid item>
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              onDeletePost={onDeletePost}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
