import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import "./index.css";
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import axios from 'axios';
import { Toaster } from "react-hot-toast";
axios.defaults.baseURL="http://localhost:5000/api/v1/";
axios.defaults.withCredentials=true;

const theme=createTheme({
  typography:{fontFamily:"Roboto Slab,serif",allVariants:{color:"white"}}
});
ReactDOM.render(
  <AuthProvider>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <Toaster position='top-right' />
  <App />
  </ThemeProvider>
  </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);