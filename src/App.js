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
import ShowContext from './ShowContext';
import AddressContext from './AddressContext';


export const NameContext = React.createContext();
export const AgeContext = React.createContext();
export const FamilyContext = React.createContext();
export const EmailContext = React.createContext();
export const TvShowContext = React.createContext();
export const PostcodeContext = React.createContext();
export const PhoneContext = React.createContext();


function App(props) {
  
  const[name, setName] = useState("milad");
  const [age, setAge] = useState(10);
  const [family, setFamily] = useState("king");
  const [email, setEmail] = useState("something@gmail.com");
  const[toggle, setToggle] = useState(true);
  const [show, setShow] = useState("breaking bad");
  const [postcode, setPostcode] = useState("w12trx");
  const [phone, setPhone] = useState(09976853376)


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

      <TvShowContext.Provider value={show}>
        <ShowContext show={show} />
      </TvShowContext.Provider>

      <PostcodeContext.Provider value={postcode}>
        <AddressContext postcode={postcode} />
      </PostcodeContext.Provider>

      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle ? <Landing /> : <Login />}
      </div>
    </div>
  );
}

export default App;
