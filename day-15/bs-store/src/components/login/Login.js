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
import AuthenticationService from "../../services/authenticationService";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {openSnackbar} from "../../store/actions/appActions";

export default function Login() {
  const dispatch = useDispatch();
  const authenticationService = new AuthenticationService();
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues:{
      userName:'zcomert',
      password:'123456'
    },
    onSubmit : async (values) => {
      
      const result = await authenticationService.login(values);
      console.log("STATUS",result)
      if(result.status===200){
        dispatch(openSnackbar({
          message : 'Login succeeded.',
          severity:'success'
        }));

        const resp = result.data;

        localStorage.setItem("userId",resp.userId);
        localStorage.setItem("userName",resp.userName);
        localStorage.setItem("firstName",resp.firstName);
        localStorage.setItem("lastName",resp.lastName);
        localStorage.setItem("accessToken",resp.accessToken);
        localStorage.setItem("isLogin",true);

        window.location.replace("/");

      }

      if(result.status===401){
        dispatch(openSnackbar({
          message : 'Login failed.',
          severity:'error'
        }))
      }
     
    }
  })

  

  

  return (
    <Container maxWidth='sm' sx={{ mt: 3 }}>
      <form onSubmit={handleSubmit}>
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
            id="userName"
            name="userName"
            onChange={handleChange}
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
            id="password"
            name="password"
            onChange={handleChange}
          />

          <Button variant='contained' type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
