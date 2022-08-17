import React from 'react'

export default function Book({book}) {
  return (
    <div key={book.id}>
        {book.title}
    </div>
  )
}
