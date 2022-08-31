import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import SimpleFab from "../../../components/fab/SimpleFab";

export default function AddAuthor() {

  const {handleSubmit, handleChange, values} = useFormik({
    initialValues:{
      firstName : '',
      lastName : ''
    },
    onSubmit : (values) => {
      console.log(values)
    }
  });

  return (
    <Container maxWidth='md'>
      <SimpleFab url='/admin/authors/list'></SimpleFab>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id='firstName'
            name='firstName'
            placeholder='First Name'
            label='Firstname'
            onChange={handleChange}
            fullWidth
          ></TextField>
          <TextField
            id='lastName'
            name='lastName'
            onChange={handleChange}
            placeholder='Last Name'
            label='Lastname'
            fullWidth
          ></TextField>
          <Button variant="contained" type="submit">Save</Button>
          {JSON.stringify(values)}
        </Stack>
      </form>
    </Container>
  );
}
