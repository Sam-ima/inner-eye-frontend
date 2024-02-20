import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';
import theme from "./theme.js";
import {store} from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
         <App />
     </Provider>
    </ThemeProvider>
    
  </React.StrictMode>
);
