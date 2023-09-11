import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill(); 


const t0 = performance.now();

function renderCallback(e) {
  console.log("Rendering done", e);
  const t1 = performance.now();

  console.log(`Mount took ~${(t1 - t0) / 1000} seconds.`);
}
//test

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
