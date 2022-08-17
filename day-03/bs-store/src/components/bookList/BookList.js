import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";

export default function BookList({ books, removeBook, addBook }) {
  return (
    <>
      <h3>BookList</h3>
      <div> {books.length}</div>
      {books.map((book) => (
        <Book key={book.id} book={book} removeBook={removeBook} />
      ))}
      <div>
        <BookAdd addBook={addBook} />
      </div>
    </>
  );
}
