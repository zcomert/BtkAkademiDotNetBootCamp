import { useState } from "react";
import data from "./data";

function App() {
  const [books, setBooks] = useState(data);
  
  // Arrow (ok)
  const clearAll = () => {
    setBooks([]);
    console.log(books);
  };

  const addBook = (book) => {
    //setBooks([...books, book])
    console.log(books)
  } 

  const removeBook = (id) => {
    //setBooks(books.filter(book => book!==id))
  }
  return (
    <>
      <div>Merhaba React.</div>
      {books.map((book, index) => (
        <div key={index}>
          {book.title} {book.price}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => clearAll()}>Clear All</button>
      <button onClick={() => addBook({})}>Add</button>
      <div>
        {books.length}
      </div>
    </>
  );
}

export default App;
