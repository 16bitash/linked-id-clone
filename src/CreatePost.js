import { Button, TextField } from "@mui/material";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const CreatePost = () => {
  const [postInputValue, setPostInputValue] = useState("");

  const handleCreatePostClick = async () => {
    if (postInputValue === "") {
      return;
    }

    try {
      const postsCollection = collection(db, "posts");
      const body = {
        body: postInputValue,
      };

      const docRef = await addDoc(postsCollection, body);

      console.log("Document written with ID: ", docRef.id);
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
