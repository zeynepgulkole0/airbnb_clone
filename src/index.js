import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import routes from './routes';
import { RouterProvider } from 'react-router-dom';
import './assets/css/tailwind.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

