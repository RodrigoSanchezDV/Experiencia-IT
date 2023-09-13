import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextComponent from "../src/context/authContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextComponent>
        <App />
      </AuthContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);