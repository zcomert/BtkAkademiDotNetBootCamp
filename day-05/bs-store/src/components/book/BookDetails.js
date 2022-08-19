import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data";

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initial = {
    id: 0,
    title: "",
    price: 0,
    summary: "",
  };
  const [book, setBook] = useState(initial);

  useEffect(() => {
    setBook(data.find((book) => book.id === parseInt(id)) || initial);
  }, []);

  return (
    <Container sx={{mt:3}} maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={4}>
          <img src={`/books/${id}.jpg`} alt={book.title} />
          <Button 
          variant="outlined"
          onClick={() => navigate("/books/list")} >Go to Book List </Button>
        </Grid>
        <Grid item xs={12} md={8}>
        <Typography variant="h4">{book.title}</Typography>
        <Typography variant="body1">{book.summary}</Typography>
        <Paper elevation={3}>
        {book.price}
        </Paper>
        </Grid>
      </Grid>















      
      
      
      
    </Container>
  );
}
