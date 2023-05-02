import React from 'react';
import './App.css';
import Cars from "./Cars";
import Navbar from './Navbar';

function App(props) {
  return (
    <div className="App">
      <button>hello</button>
      <p>{props.model}</p>
      <Cars model="bmw" speed="250 km/h">super speed</Cars>
      <Navbar about="british" />

    </div>
  );
}

export default App;
