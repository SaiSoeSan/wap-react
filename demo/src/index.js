import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Assignment3 from './Assignment3';
import Assignment1 from './Assignment1';
import Assignment4 from './Assignment4';
// import { Assignment2 } from './Assignment2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Assignment1/> */}
    {/* <Assignment2/> */}
    {/* <Assignment3/> */}
    <Assignment4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
