import React from "react";
import Book from "../book/Book";

export default function BookList({ books }) {
  return (
    <>
      <div>BookList {books.length}</div>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </>
  );
}
