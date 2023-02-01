import {
  Avatar,
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
import { useParams } from "react-router-dom";
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

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(userId);
      setUser(user);
    };

    const fetchUserImage = async () => {
      const url = await getImageUrl(userId);
      setUserImageUrl(url);
    };

    fetchUser();
    fetchUserImage();
  }, [userId]);

  return (
    <>
      <NavBar />
      <Avatar
        alt="Remy Sharp"
        src={userImageUrl}
        sx={{ width: 56, height: 56 }}
      />
      <Typography>First Name:</Typography>
      <Typography>{user.firstName}</Typography>

      <Typography>Last Name:</Typography>
      <Typography>{user.lastName}</Typography>

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
    </>
  );
};

export default User;
