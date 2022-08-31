import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateAuthor() {
    const {id} = useParams();
  return (
    <Container maxWidth="md">
      <form>
        
      </form>
    </Container>
  )
}
