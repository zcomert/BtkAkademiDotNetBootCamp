import React from 'react'

export default function Book({book, removeBook}) {
  return (
    <div key={book.id}>
        {book.title}
        <button onClick={() => removeBook(book.id)} >Remove</button>
    </div>
  )
}
