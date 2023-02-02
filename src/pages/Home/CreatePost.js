import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAsync } from "../../redux/slices/postSlice";
import { addPost } from "../../services/firebase/post";

const CreatePost = (props) => {
  const [postInputValue, setPostInputValue] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (postInputValue === "") {
      return;
    }

    dispatch(createPostAsync(postInputValue, auth.userId));

    setPostInputValue("");
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
