import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";

export default function BookList({ books, removeBook, addBook }) {
  return (
    <>
      <div>BookList {books.length}</div>
      {books.map((book) => (
        <Book book={book} removeBook={removeBook} />
      ))}
      <div>
        <BookAdd addBook={addBook} />
      </div>
    </>
  );
}
