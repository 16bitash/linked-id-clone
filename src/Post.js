import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";
import { deletePost } from "./services/post";

const Post = (props) => {
  const { body, id } = props;

  const handleDeleteClick = () => {
    deletePost(id);
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
          <Button size="small" color="error" onClick={handleDeleteClick}>
            <DeleteOutlineIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
