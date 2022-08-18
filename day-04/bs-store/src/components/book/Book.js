import React from "react";
import {Link} from "react-router-dom"

export default function Book({ book, removeBook }) {
  return (
    <div>
      <Link to={`/books/details/${book.id}`}>{book.title}</Link>
      <button onClick={() => removeBook(book.id)}>Remove</button>
    </div>
  );
}
