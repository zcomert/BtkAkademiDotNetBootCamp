import React, { useContext } from "react";
import { AppContext } from "../../context/ContextApplication";

export default function BookAdd({ addBook }) {
  // destructing...
  const {message, theme} = useContext(AppContext);
  

  const book = {
    id: 14,
    title: "Nutuk",
    price: 110,
  };
  return (
    <div>
      BookAdd
      <button onClick={() => addBook(book)} >Add</button>
      {message}
      {theme}
    </div>
  );
}
