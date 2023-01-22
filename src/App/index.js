import { Button, TextField } from "@mui/material";
import NavBar from "../NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <TextField id="standard-basic" label="Say Something" variant="standard" />
      <Button variant="contained">POST</Button>
    </>
  );
}

export default App;
