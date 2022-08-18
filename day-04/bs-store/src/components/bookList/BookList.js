import { Container, Fab, Grid, List, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useContext } from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/ContextApplication";

export default function BookList() {
  const {books} = useContext(AppContext);
  const navigate = useNavigate();
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  const fab = {
    color: "error",
    sx: fabStyle,
    icon: <AddIcon />,
    label: "Add",
  };

  return (
    <Container sx={{mt:3}} maxWidth='md'>
      <Fab
        onClick={() => navigate("/books/add")}
        sx={fab.sx}
        color={fab.color}
        aria-label='add'
      >
        {fab.icon}
      </Fab>

      <Typography align='center' variant='h5' gutterBottom>
       
      </Typography>

      <Grid container spacing={2}>
        {books.map((book) => (
          <Book key={book.id} book={book}  />
        ))}
      </Grid>

      <Typography align='center' variant='caption' display='block' gutterBottom>
        The numbe of books ({books.length}) has been listed.
      </Typography>
    </Container>
  );
}
