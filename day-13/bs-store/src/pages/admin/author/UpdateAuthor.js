import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SimpleFab from '../../../components/fab/SimpleFab';
import AuthorService from '../../../services/authorService';

export default function UpdateAuthor() {
    const {id} = useParams();
    const authorService = new AuthorService();
    const [author, setAuthor] = useState();
  return (
    <Container maxWidth="md">
      <SimpleFab url="/admin/authors/list" />
      <form>
        
      </form>
    </Container>
  )
}
