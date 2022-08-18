import React, { useContext } from "react";
import { AppContext } from "../../context/ContextApplication";

export default function BookAdd() {
  // destructing...
  const { books, setBooks } = useContext(AppContext);
 
  const book = {
    id: 14,
    title: "Nutuk",
    price: 110,
  };

  const addBook = (book) => {
    setBooks([...books, book]);
  }


  return (
    <div>
      BookAdd
      <button onClick={() => addBook(book)}>Add</button>
    </div>
  );
}
