import { Button, Stack, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SimpleFab from "../../../components/fab/SimpleFab";
import AuthorService from "../../../services/authorService";
import { openSnackbar } from "../../../store/actions/appActions";
import { updateOneAuthor } from "../../../store/actions/authorActions";

export default function UpdateAuthor() {
  
  const { id } = useParams();
  const authorService = new AuthorService();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    onSubmit : (values) => {
      dispatch(updateOneAuthor(id,values));
      dispatch(openSnackbar({
        message:`Author ${values.firstName} ${values.lastName} has been updated.`,
        severity:'success'
      }));
      navigate("/admin/authors/list");
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
