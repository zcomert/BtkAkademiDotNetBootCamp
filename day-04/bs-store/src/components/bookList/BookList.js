import { Typography } from "@mui/material";
import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";

export default function BookList({ books, removeBook, addBook }) {
  return (
    <>
      <Typography align="center" variant='h5' gutterBottom>
        Book List
      </Typography>

      {books.map((book) => (
        <Book key={book.id} book={book} removeBook={removeBook} />
      ))}
      <div>
        <BookAdd addBook={addBook} />
      </div>

      <Typography align="center" variant="caption" display="block" gutterBottom>
        The numbe of books ({books.length}) has been listed.
      </Typography>
    </>
  );
}
