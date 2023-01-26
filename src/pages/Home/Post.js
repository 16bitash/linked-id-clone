import {
  Button,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";

import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";
import { deletePost } from "../../services/firebase/post";

const Post = (props) => {
  const { body, id, onDeletePost } = props;

  const handleDeleteClick = async () => {
    await deletePost(id);
    onDeletePost();
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Title
          </Typography>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Delete">
            <Button size="small" color="error" onClick={handleDeleteClick}>
              <DeleteOutlineIcon />
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
