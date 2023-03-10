import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../services/firebase/user";
import { getImageUrl } from "../../services/firebase/user-image";
import NavBar from "../../shared/components/NavBar";

const User = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    experiences: [],
  });
  const [userImageUrl, setUserImageUrl] = useState(null);

  const auth = useSelector((state) => state.auth);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(userId);
      setUser(user);
    };

    const fetchUserImage = async () => {
      try {
        const url = await getImageUrl(userId);
        setUserImageUrl(url);
      } catch (error) {
        if (error.code !== "storage/object-not-found") {
          throw new Error(error);
        }
      }
    };

    fetchUser();
    fetchUserImage();
  }, [userId]);

  return (
    <>
      <NavBar />
      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src={userImageUrl}
            sx={{ width: 56, height: 56, mt: 2 }}
          />
        </Grid>
        <Box sx={{ my: 2 }}>
          <Grid item>
            <Typography variant="h6">First Name:</Typography>
            <Typography>{user.firstName}</Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6">Last Name:</Typography>
            <Typography>{user.lastName}</Typography>
          </Grid>
        </Box>

        <Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>company name</TableCell>
                  <TableCell>start data</TableCell>
                  <TableCell>end data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.experiences.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.companyName}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {auth.userId === userId && (
          <Grid item sx={{ mt: 2 }}>
            <Link to={`/user/${userId}/edit`}>
              <Button>Edit</Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default User;
