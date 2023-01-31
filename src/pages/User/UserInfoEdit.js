import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/firebase/user";

const createEmptyExperience = () => {
  return {
    companyName: "",
    startDate: "",
    endDate: "",
  };
};

const UserInfoEdit = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experience, setExperience] = useState([createEmptyExperience()]);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(userId);
      setUser(user);
      setFirstName(user.firstName);
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Heyy");
  };

  const handleCompanyNameChange = () => {};
  const handleFirstNameChange = () => {};
  const handleLastNameChange = () => {};

  const handleAddMoreExpClick = () => {
    setExperience([...experience, createEmptyExperience()]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        flexDirection="column"
        sx={{
          mt: 4,
        }}
      >
        <Grid item>
          <TextField
            label="first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography>Experience:</Typography>
        </Grid>
        {experience.map((exp) => (
          <Grid item>
            <TextField
              label="company name"
              value={exp.companyName}
              onChange={handleCompanyNameChange}
            />
            <TextField
              label="start date"
              value={exp.startDate}
              onChange={handleFirstNameChange}
            />
            <TextField
              label="end date"
              value={exp.endDate}
              onChange={handleLastNameChange}
            />
          </Grid>
        ))}
        <Button variant="outlined" onClick={handleAddMoreExpClick}>
          Add more experience
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default UserInfoEdit;
