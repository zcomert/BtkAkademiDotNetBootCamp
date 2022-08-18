import React from "react";

export default function BookAdd({ addBook }) {
  const book = {
    id: 14,
    title: "Nutuk",
    price: 110,
  };
  return (
    <div>
      BookAdd
      <button onClick={() => addBook(book)} >Add</button>
    </div>
  );
}
