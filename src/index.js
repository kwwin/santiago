import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* Dapat Yung router yung naka import para sa netlify */}
    <Router />
  </BrowserRouter>
);

