import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { addPost } from "../../services/firebase/post";

const CreatePost = (props) => {
  const { onPostCreate } = props;

  const [postInputValue, setPostInputValue] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (postInputValue === "") {
      return;
    }

    try {
      await addPost(postInputValue);
      setPostInputValue("");
      onPostCreate();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ my: 1 }}
      >
        <Grid item>
          <TextField
            label="Say Something"
            variant="standard"
            value={postInputValue}
            onChange={(event) => setPostInputValue(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            POST
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreatePost;
