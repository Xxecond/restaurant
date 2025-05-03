import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
