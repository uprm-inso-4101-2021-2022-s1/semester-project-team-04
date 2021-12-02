import * as React from 'react';
import Avatar from '@mui/material/Avatar/';
import Button from '@mui/material/Button/';
import CssBaseline from '@mui/material/CssBaseline/';
import TextField from '@mui/material/TextField/';
import FormControlLabel from '@mui/material/FormControlLabel/';
import Checkbox from '@mui/material/Checkbox/';
import Link from '@mui/material/Link/';
import Paper from '@mui/material/Paper/';
import Box from '@mui/material/Box/';
import Grid from '@mui/material/Grid/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import history from '../history';
import {useState} from "react";
import {useContext} from "react";
import validator from 'validator'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {'Copyright © '}
      <Link
        underline='hover'
        color='rgb(10, 96, 235)'
        onClick={() => history.push('/')}>
        CarHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterUser() {
    //const{store, actions} = useContext(Context);
    const [checked, setChecked] = useState(false);
    const[email, setEmail] = useState("");
    const [password,setPassword] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

   };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    const handleClick = () => {

        if((email === '' && password === '') || (email === '' || password === '')) {
            alert("Enter Email and Password.");
            return history.push('/register');
        }

        if(!validator.isEmail(email)){
             alert("Enter a valid Email.");
             return history.push('/register');
        }

        if(!checked){
            alert("Agree to terms of service to proceed.");
            return history.push('/register');
        }
        const opts = {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"email":email,
  "password":password})
    };
    fetch('http://127.0.0.1:5000/register',opts)
        .then(resp =>{
            if(resp.status === 200) return resp.json();
            else if(resp.status === 404) {
                alert("Email already exist.");
                history.push('/register');
            }
            else alert("There has been some error.");
        })
        .then(/*data =>{
            console.log("This came from the backend",data);
            sessionStorage.setItem("token", data.access_token);
        }*/)
        .catch(error =>{
            console.error("Fatal error",error);
        })
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/featured/?cars)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 5, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Register Now
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Enter a valid Email Address'
                name='email'
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Enter a Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' onChange={(e) =>setChecked(e.target.value)} />}
                label='I agree to the terms of service.'

              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                /////////////////////////////////////////
                onClick={() => {history.push('/');handleClick()}}>
                Register
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
