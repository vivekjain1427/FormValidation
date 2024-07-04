import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormComponent from './Components/form-component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FormComponent></FormComponent>
  </React.StrictMode>
);
