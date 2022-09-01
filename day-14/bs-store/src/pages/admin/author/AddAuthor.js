import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import SimpleFab from "../../../components/fab/SimpleFab";

import { createOneAuthor } from "../../../store/actions/authorActions";

import {openSnackbar} from "../../../store/actions/appActions";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validationSchema";

export default function AddAuthor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, handleBlur,touched } = useFormik({
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
    validationSchema
  });

  return (
    <Container maxWidth='md'>
      <SimpleFab url='/admin/authors/list'></SimpleFab>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id='firstName'
            name='firstName'
            required 
            error = {errors.firstName && touched.firstName}
            placeholder='First Name'
            label='Firstname'
            onChange={handleChange}
            onBlur = {handleBlur}
            fullWidth
            helperText = {errors.firstName && touched.firstName ? errors.firstName : ""}
          ></TextField>
          <TextField
            id='lastName'
            name='lastName'
            required
            onBlur={handleBlur}
            onChange={handleChange}
            error = {errors.lastName && touched.lastName}
            placeholder='Last Name'
            label='Lastname'
            fullWidth
            helperText = {errors.lastName && touched.lastName ? errors.lastName : ""}
          ></TextField>
          <Button variant='contained' type='submit'>
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
