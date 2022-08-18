import { Container, Fab, Grid, List, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";
import { useNavigate } from "react-router-dom";

export default function BookList({ books, removeBook, addBook }) {
  const navigate = useNavigate();
  const fabStyle = {
    position: "absolute",
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
    <Container maxWidth='md'>
      <Fab
        onClick={() => navigate("/books/add")}
        sx={fab.sx}
        color={fab.color}
        aria-label='add'
      >
        {fab.icon}
      </Fab>

      <Typography align='center' variant='h5' gutterBottom>
        Book List
      </Typography>

      <Grid container spacing={2}>
        {books.map((book) => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))}
      </Grid>

      <Typography align='center' variant='caption' display='block' gutterBottom>
        The numbe of books ({books.length}) has been listed.
      </Typography>
    </Container>
  );
}
