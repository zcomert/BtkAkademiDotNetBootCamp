import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import SimpleFab from "../../../components/fab/SimpleFab";

import { createOneAuthor } from "../../../store/actions/authorActions";

import {openSnackbar} from "../../../store/actions/appActions";
import { useNavigate } from "react-router-dom";

export default function AddAuthor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(createOneAuthor(values));
      dispatch(
        openSnackbar({
          message: "Author has been added.",
          severity: "success",
        })
      );
      navigate("/admin/authors/list");
    },
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
          <Button variant='contained' type='submit'>
            Save
          </Button>
          {JSON.stringify(values)}
        </Stack>
      </form>
    </Container>
  );
}
