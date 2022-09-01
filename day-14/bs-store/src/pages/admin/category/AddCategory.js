import { Container, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SimpleFab from "../../../components/fab/SimpleFab";

export default function AddCategory() {
  return (
    <Container maxWidth='md'>
      <SimpleFab url='/admin/categories/list' />
      <form>
        <Stack spacing={3}>
          <TextField
            id='categoryName'
            name='categoryName'
            fullWidth
            label='Category name'
          ></TextField>
          <TextField
            id='description'
            name='description'
            fullWidth
            label='Description'
          ></TextField>
        </Stack>
      </form>
    </Container>
  );
}
