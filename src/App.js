import React from 'react';
import './App.css';
import Cars from "./Cars"

function App(props) {
  return (
    <div className="App">
      <button>hello</button>
      <p>{props.model}</p>
      <Cars model="bmw" speed="250 km/h"/>

    </div>
  );
}

export default App;
