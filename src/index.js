import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const REACT_VERSION = React.version;
ReactDOM.render(
  <h1>test</h1>,<div>React version: {REACT_VERSION}</div>
  , document.getElementById('root'));
  const [state, setState] = useState(initialState);
  setState(newState);
  function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Total : {count}
        <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
  
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

