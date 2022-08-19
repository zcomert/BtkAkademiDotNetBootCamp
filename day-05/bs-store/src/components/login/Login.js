import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import AppContext from "../../context/ContextApplication";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import { Stack } from "@mui/system";

export default function Login() {
  const { setIsLogin } = useContext(AppContext);

  return (
    <Container maxWidth='sm' sx={{ mt: 3 }}>
      <Stack spacing={3}>
        <Typography variant='h4' align='center' gutterBottom>
          Login
        </Typography>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
          placeholder='Username'
          label='Username'
          type='text'
        />

        <TextField
          placeholder='Password'
          label='Password'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
          type='password'
        />

        <Button
          variant='contained'
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Login
        </Button>
      </Stack>
    </Container>
  );
}
