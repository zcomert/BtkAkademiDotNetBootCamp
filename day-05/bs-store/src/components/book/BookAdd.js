import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../context/ContextApplication";

export default function BookAdd() {
  // destructing...
  const { books, setBooks } = useContext(AppContext);

  return (
    <Container maxWidth='md'>
      <Stack spacing={2}>
        <TextField id='title' label='Title' placeHolder='title'></TextField>

        <TextField id='price' label='Price' placeHolder='Price'></TextField>

        <TextField 
        multiline
        id='summary' 
        label='Summary' 
        placeHolder='Summary'></TextField>

        <Button variant='contained'>Add</Button>
      </Stack>
    </Container>
  );
}
