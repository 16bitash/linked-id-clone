import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { DeleteOutline as DeleteOutlineIcon } from "@mui/icons-material";

const Post = (props) => {
  const { body, id } = props;
  console.log(id);

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
          <Button size="small" color="error">
            <DeleteOutlineIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
