import React, { useState } from 'react';
import './App.css';
import Cars from "./Cars";
import Navbar from './Navbar';
import Cover from './Cover';
import Counter from './Counter';
import Context from './Context';
import NewContext from './NewContext';
import OldContext from "./OldContext"


export const NameContext = React.createContext();
export const AgeContext = React.createContext();
export const FamilyContext = React.createContext();

function App(props) {
  
  const[name, setName] = useState("milad");
  const [age, setAge] = useState(10);
  const [family, setFamily] = useState("king");


  return (
    <div className="App">
      <button>hello</button>
      <p>{props.model}</p>
      <Cars model="bmw" speed="250 km/h">
        super speed
      </Cars>
      <Navbar about="british" />
      <Cover />
      <Counter />

      <NameContext.Provider value={name}>
        <Context name={name} />
      </NameContext.Provider>

      <AgeContext.Provider value={age}>
        <NewContext age={name} />
      </AgeContext.Provider>

      <FamilyContext.Provider value={family}>
        <OldContext family={family} />
      </FamilyContext.Provider>

    </div>
  );
}

export default App;
