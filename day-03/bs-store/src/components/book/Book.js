import React from 'react'

export default function Book({book, removeBook}) {
  return (
    <div>
        {book.title}
        <button onClick={() => removeBook(book.id)} >Remove</button>
    </div>
  )
}
