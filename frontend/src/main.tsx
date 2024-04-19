import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import "./index.css";
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:5000/api/v1";
axios.defaults.withCredentials=true;

const theme=createTheme({
  typography:{fontFamily:"Roboto Slab,serif",allVariants:{color:"white"}}
});
ReactDOM.render(
  <AuthProvider>
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);