import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/normalize.css';
import './css/webflow.css';
import './css/astroceleb.webflow.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>


);

