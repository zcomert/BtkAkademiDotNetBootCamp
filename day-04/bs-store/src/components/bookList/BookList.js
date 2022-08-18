import {
  Container,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";

export default function BookList({ books, removeBook, addBook }) {
  return (
    <Container maxWidth="md">
      <Typography align='center' variant='h5' gutterBottom>
        Book List
      </Typography>

      <List>
        {books.map((book) => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))}
      </List>
      
     

      <Typography align='center' variant='caption' display='block' gutterBottom>
        The numbe of books ({books.length}) has been listed.
      </Typography>
    </Container>
  );
}
