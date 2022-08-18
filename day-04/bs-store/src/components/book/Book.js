import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Tooltip } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContext from "../../context/ContextApplication";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Book({ book }) {
  const { setBooks, books } = React.useContext(AppContext);

  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {book.title.substring(0, 2)}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={book.title}
          subheader='September 14, 2016'
        />
        <CardMedia
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/books/details/${book.id}`)}
          component='img'
          height='350'
          image={`/books/${book.id}.jpg`}
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {/* {book.summary} */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton onClick={() => removeBook(book.id)} aria-label='share'>
            <DeleteIcon />
          </IconButton>
          <ExpandMore>
            <Tooltip title='Show more'>
              <ArrowForwardIosIcon
                onClick={() => navigate(`/books/details/${book.id}`)}
              />
            </Tooltip>
          </ExpandMore>
        </CardActions>
      </Card>
    </Grid>
  );
}
