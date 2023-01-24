import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { addPost } from "./services/post";

const CreatePost = (props) => {
  const { onPostCreate } = props;

  const [postInputValue, setPostInputValue] = useState("");

  const handleCreatePostClick = async () => {
    if (postInputValue === "") {
      return;
    }

    try {
      const addedPost = await addPost({ body: postInputValue });
      setPostInputValue("");
      onPostCreate();

      console.log("Document written with ID: ", addedPost.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <TextField
        label="Say Something"
        variant="standard"
        value={postInputValue}
        onChange={(event) => setPostInputValue(event.target.value)}
      />
      <Button variant="contained" onClick={handleCreatePostClick}>
        POST
      </Button>
    </>
  );
};

export default CreatePost;
