import Post from "./Post";

const Posts = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} body={post.body} />
      ))}
    </>
  );
};

export default Posts;
