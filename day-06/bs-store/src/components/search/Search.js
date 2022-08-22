import React from "react";
import { Container, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Container sx={{my:5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'65vh'
    }} maxWidth='sm'>
      
      <Typography align='center' variant='h5' gutterBottom>
        Search
      </Typography>
      
      <TextField
      required
      fullWidth
      label="Search"
      InputProps={{
        endAdornment: <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>,
      }}
      placeholder="Search something..." />
    </Container>
  );
}
