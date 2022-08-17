import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";

export default function BookDetails() {
  const { id } = useParams();
  const initial = {
    id: 0,
    title: "xx",
    price: 0,
    summary: "..."
  }
  const [book, setBook] = useState(initial);

  useEffect(() => {
    setBook(data.find((book) => book.id === parseInt(id)) || initial);
  }, []);

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.summary}</p>
      <h5>
        <b>Price</b> {book.price}
      </h5>
    </div>
  );
}
