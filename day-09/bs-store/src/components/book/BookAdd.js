import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/ContextApplication";
import {useNavigate} from "react-router-dom";

export default function BookAdd() {
  // destructing...
  const { books, setBooks, setSnackbar } = useContext(AppContext);
  const navigate = useNavigate();
  const [book, setBook] = useState({
    id: 0,
    title: "",
    summary: "",
    price: 0,
  });

  const handleChange = (e) => {
    setBook({
      ...book, // id, title, price, summary
      id:books.length+1,
      [e.target.name] : e.target.value
    })
    console.log(e.target.value);
  };

  const handleAddBook = () => {
    setBooks([...books, book])
    setSnackbar({
      isOpen:true,
      message:`${book.title} has been added successfully.`,
      severity:'error'
    });
    navigate("/books/list")
  };

  return (
    <Container maxWidth='md'>
      <Stack spacing={2}>
        <TextField
          id='title'
          name="title"
          label='Title'
          onChange={(e) => handleChange(e)}
          placeHolder='title'
        ></TextField>
        
        <TextField
          id='price'
          name="price"
          onChange={(e) => handleChange(e)}
          label='Price'
          placeHolder='Price'
        ></TextField>
        
        <TextField
          onChange={(e) => handleChange(e)}
          multiline
          id='summary'
          name="summary"
          label='Summary'
          placeHolder='Summary'
        ></TextField>

        <Button variant='contained' onClick={() => handleAddBook()}>
          Add
        </Button>

        {JSON.stringify(book)}
      </Stack>
    </Container>
  );
}
