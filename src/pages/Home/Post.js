import {
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";
import { deletePost } from "../../services/firebase/post";
import { getUser } from "../../services/firebase/user";
import { useEffect, useState } from "react";

const Post = (props) => {
  const { body, id, createdBy, onDeletePost } = props;

  const [postOwnerInfo, setPostOwnerInfo] = useState({
    firstName: "",
    lastName: "",
    id: null,
  });

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(createdBy);
      setPostOwnerInfo(user);
    };

    fetchUser();
  }, [createdBy]);

  const handleDeleteClick = async () => {
    await deletePost(id);
    onDeletePost();
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {postOwnerInfo.firstName}
          </Typography>

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
