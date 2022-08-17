import React from "react";
import Book from "../book/Book";
import BookAdd from "../book/BookAdd";
import { List } from 'rsuite';


export default function BookList({ books, removeBook, addBook }) {
  return (
    <>
      <h3>BookList</h3>
      <div> {books.length}</div>
      <List>
      {books.map((book) => (
        <List.Item>
        <Book key={book.id} book={book} removeBook={removeBook} />
        </List.Item>
      ))}
      </List>
      <div>
        <BookAdd addBook={addBook} />
      </div>
    </>
  );
}
