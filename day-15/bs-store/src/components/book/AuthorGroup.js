import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

export default function AuthorGroup({bookAuthors}) {
  return (
    <AvatarGroup max={5}>
      { bookAuthors &&  bookAuthors.map((ba) => (
         <Avatar alt={`${ba.author.firstName} ${ba.author.lastName}`} 
         src={`/authors/${ba.author.authorId%21}.jpg`} />
      ))}
    </AvatarGroup>
  )
}
