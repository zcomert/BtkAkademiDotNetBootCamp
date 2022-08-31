import { Button, Stack, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimpleFab from "../../../components/fab/SimpleFab";
import AuthorService from "../../../services/authorService";

export default function UpdateAuthor() {
  
  const { id } = useParams();
  const authorService = new AuthorService();

  useEffect(() => {
    authorService.getOneAuthor(id).then((resp) => {
      setValues(resp);
     });
  }, []);

  const { handleSubmit, handleChange, values, setValues } = useFormik({
    initialValues : {
      firstName : '',
      lastName : ''
    },
    onSubmit : () => {
      console.log(values);
    }
  });
 

  return (
    <Container maxWidth='md'>
      <SimpleFab url='/admin/authors/list' />
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id='firstName'
            name='firstName'
            fullWidth
            onChange={handleChange}
            value = {values.firstName}
          ></TextField>

          <TextField
            id='lastName'
            name='lastName'
            fullWidth
            onChange={handleChange}
            value = {values.lastName}
          ></TextField>

          <Button type='submit' variant='contained'>
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
