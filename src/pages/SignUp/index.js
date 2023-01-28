import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/firebase/auth";
import NavBar from "../../shared/components/NavBar";

const initialError = {
  email: "",
  password: "",
};

const SignUp = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(initialError);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(initialError);

    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

    let isValid = true;

    if (!emailRegex.test(emailValue)) {
      setError((prevState) => {
        return { ...prevState, email: "Email is invalid" };
      });

      isValid = false;
    }

    if (passwordValue.length < 6) {
      setError((prevState) => {
        return {
          ...prevState,
          password: "Password must be at least 6 characters",
        };
      });

      isValid = false;
    }

    if (!isValid) {
      return;
    }

    await signUp(emailValue, passwordValue);

    navigate("/");
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container flexDirection="column" spacing={2}>
            <Grid item>
              <TextField
                label="email"
                variant="standard"
                fullWidth
                error={error.email !== ""}
                helperText={error.email}
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="password"
                type="password"
                variant="standard"
                fullWidth
                error={error.password !== ""}
                helperText={error.password}
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </Grid>

            <Grid item>
              <Button variant="contained" type="submit">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="subtitle1" paragraph={true} sx={{ mt: 2 }}>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </Typography>
      </Container>
    </>
  );
};

export default SignUp;
