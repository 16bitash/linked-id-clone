import {
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";
import { getUser } from "../../services/firebase/user";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePostAsync } from "../../redux/slices/postSlice";

const Post = (props) => {
  const { body, id, createdBy } = props;

  const [postOwnerInfo, setPostOwnerInfo] = useState({
    firstName: "",
    lastName: "",
    id: null,
  });

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(createdBy);
      setPostOwnerInfo(user);
    };

    fetchUser();
  }, [createdBy]);

  const handleDeleteClick = async () => {
    dispatch(deletePostAsync(id));
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Link to={`/user/${createdBy}`}>
            <Typography variant="h5" component="div">
              {postOwnerInfo.firstName}
            </Typography>
          </Link>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
        {createdBy === auth.userId && (
          <CardActions>
            <Tooltip title="Delete">
              <Button size="small" color="error" onClick={handleDeleteClick}>
                <DeleteOutlineIcon />
              </Button>
            </Tooltip>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default Post;
