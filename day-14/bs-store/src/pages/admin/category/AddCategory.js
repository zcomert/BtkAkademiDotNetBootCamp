import { Button, Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import SimpleFab from "../../../components/fab/SimpleFab";
import { createOneCategory } from "../../../store/actions/categoryActions";
import { openSnackbar} from "../../../store/actions/appActions";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues : {
      categoryName:'',
      description:''
    },
    onSubmit : (values) => {
      dispatch(createOneCategory(values));
      dispatch(openSnackbar({
        message: `${values.categoryName} has been created.`,
        severity: 'success'
      }));
      navigate("/admin/categories/list");
    }
  });
  return (
    <Container maxWidth='md'>
      <SimpleFab url='/admin/categories/list' />
      <form onSubmit={handleSubmit} >
        <Stack spacing={3}>
          <TextField
            id='categoryName'
            name='categoryName'
            onChange={handleChange}
            fullWidth
            label='Category name'
          ></TextField>
          <TextField
            id='description'
            multiline
            name='description'
            fullWidth
            onChange={handleChange}
            label='Description'
          ></TextField>
          <Button type='submit' variant='contained'>
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
