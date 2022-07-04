import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
const root = ReactDOM.createRoot(<h1>Test</h1>,document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
var element = <h1>Bonjour, monde !</h1>;
>>>>>>> 3f7106751f5f851bf9ec80665980df01621b0ef5


 element += <h1>Hello !</h1>;
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

