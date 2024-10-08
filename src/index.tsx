import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const customTheme = createTheme({
  palette: {
    background: {
      default: '#f6fef1', // Background color
      paper: '#f8fdf6',    // Paper color
    },
    primary: {
      main: '#4bcd87', // Primary color
    },
    secondary: {
      main: '#0d5b33', // Secondary color
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),  // Clean, professional fonts
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

