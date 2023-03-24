import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'
import { ModeContextProvider } from './modeContext';
import { AuthContextProvider } from './AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='dashboard-auth'>
    <ModeContextProvider>
      <AuthContextProvider >
    <App />
    </AuthContextProvider>
    </ModeContextProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);


