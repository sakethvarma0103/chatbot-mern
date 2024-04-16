import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import "./index.css";
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme=createTheme({
  typography:{fontFamily:"Roboto Slab,serif",allVariants:{color:"white"}}
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>,
  document.getElementById('root')
);