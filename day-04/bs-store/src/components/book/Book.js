import React from "react";
import { Button } from "@mui/material";
import {Link} from "react-router-dom"

export default function Book({ book, removeBook }) {
  return (
    <div>
      <Link to={`/books/details/${book.id}`}>{book.title}</Link>
      <Button 
      color="primary"
      variant="contained"
      onClick={() => 
      removeBook(book.id)}>Remove
      </Button>
    </div>
  );
}
