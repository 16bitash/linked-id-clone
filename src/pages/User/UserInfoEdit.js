import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser } from "../../services/firebase/user";

import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";
import NavBar from "../../shared/components/NavBar";
import { uploadImage } from "../../services/firebase/user-image";

const createEmptyExperience = () => {
  return {
    companyName: "",
    startDate: "",
    endDate: "",
    id: Math.random(),
  };
};

const UserInfoEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [userImage, setUserImage] = useState(null);

  const { userId } = useParams();

  const fetchUser = useCallback(async () => {
    const user = await getUser(userId);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setExperiences(
      user.experiences.map((exp) => ({ ...exp, id: Math.random() }))
    );
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const promiseArray = [
      updateUser(userId, { firstName, lastName, experiences }),
      uploadImage(userImage, userId),
    ];

    await Promise.all(promiseArray);

    fetchUser();
  };

  const handleCompanyNameChange = (index, value) => {
    setExperiences((prevState) => {
      return prevState.map((exp, i) => {
        if (i === index) {
          return {
            ...exp,
            companyName: value,
          };
        }

        return exp;
      });
    });
  };

  const handleFirstNameChange = (index, value) => {
    setExperiences((prevState) => {
      return prevState.map((exp, i) => {
        if (i === index) {
          return {
            ...exp,
            startDate: value,
          };
        }

        return exp;
      });
    });
  };

  const handleLastNameChange = (index, value) => {
    setExperiences((prevState) => {
      return prevState.map((exp, i) => {
        if (i === index) {
          return {
            ...exp,
            endDate: value,
          };
        }

        return exp;
      });
    });
  };

  const handleAddMoreExpClick = () => {
    setExperiences([...experiences, createEmptyExperience()]);
  };

  const handleDeleteClick = (index) => {
    setExperiences((prevState) => {
      return prevState.filter((exp, i) => i !== index);
    });
  };

  const onFileChange = async (event) => {
    setUserImage(event.target.files[0]);
  };

  return (
    <>
      <NavBar />
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
              required
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
          {experiences.map((exp, index) => (
            <Grid item key={exp.id}>
              <TextField
                label="company name"
                value={exp.companyName}
                required
                onChange={(event) =>
                  handleCompanyNameChange(index, event.target.value)
                }
              />
              <TextField
                label="start date"
                value={exp.startDate}
                required
                onChange={(event) =>
                  handleFirstNameChange(index, event.target.value)
                }
              />
              <TextField
                label="end date"
                value={exp.endDate}
                required
                onChange={(event) =>
                  handleLastNameChange(index, event.target.value)
                }
              />
              <Tooltip title="Delete">
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDeleteClick(index)}
                >
                  <DeleteOutlineIcon />
                </Button>
              </Tooltip>
            </Grid>
          ))}
          <Grid item>
            <TextField type="file" onChange={onFileChange} />
          </Grid>
          <Button variant="outlined" onClick={handleAddMoreExpClick}>
            Add more experience
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default UserInfoEdit;
