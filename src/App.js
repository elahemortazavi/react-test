import React, { useState } from 'react';
import './App.css';
import Cars from "./Cars";
import Navbar from './Navbar';
import Cover from './Cover';
import Counter from './Counter';
import Context from './Context';
import NewContext from './NewContext';
import OldContext from "./OldContext"
import MediumContext from './MediumContext';
import Login from "./Login";
import Landing from "./Landing";


export const NameContext = React.createContext();
export const AgeContext = React.createContext();
export const FamilyContext = React.createContext();
export const EmailContext = React.createContext();


function App(props) {
  
  const[name, setName] = useState("milad");
  const [age, setAge] = useState(10);
  const [family, setFamily] = useState("king");
  const [email, setEmail] = useState("something@gmail.com");


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

      <EmailContext.Provider value={email}>
        <MediumContext email={email} />
      </EmailContext.Provider>

    </div>
  );
}

export default App;
