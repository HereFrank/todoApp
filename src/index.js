import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Este reactDOM es lo que va a estar mostrando tu aplicación en tu navegador
ReactDOM.render(
  // Te va a permitir mostrar cualquier error que tengas en react en tu consola 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

