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
import NumberContext from './NumberContext';
import SoldCarsContext from './SoldCarsContext';
import BestSeller from './Best Seller';
import MobileBrandContext from './MobileBrandsContext';
import GameContext from './GameContext';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();
export const FamilyContext = React.createContext();
export const EmailContext = React.createContext();
export const TvShowContext = React.createContext();
export const PostcodeContext = React.createContext();
export const PhoneContext = React.createContext();
export const SoldContext = React.createContext();
export const BestSoldContext = React.createContext();
export const MobileContext = React.createContext();
export const GameTypeContext = React.createContext();


function App(props) {
  
  const[name, setName] = useState("milad");
  const [age, setAge] = useState(10);
  const [family, setFamily] = useState("king");
  const [email, setEmail] = useState("something@gmail.com");
  const[toggle, setToggle] = useState(true);
  const [show, setShow] = useState("breaking bad");
  const [postcode, setPostcode] = useState("w12trx");
  const [phone, setPhone] = useState('00667543209');
  const [sold, setSold] = useState(3);
  const [car, setCar] = useState("Benz");
  const [brand, setBrand] = useState("Apple");
  const [game, setGame] = useState("candy crash");



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

      <PhoneContext.Provider value={phone}>
        <NumberContext phone={phone} />
      </PhoneContext.Provider>

      <SoldContext.Provider value={sold}>
        <SoldCarsContext sold={sold} />
      </SoldContext.Provider>

      <BestSoldContext.Provider value={car}>
        <BestSeller car={car} />
      </BestSoldContext.Provider>

      <MobileContext.Provider value={brand}>
        <MobileBrandContext brand={brand} />
      </MobileContext.Provider>

      <GameTypeContext.Provider value={game}>
        <GameContext game={game} />
      </GameTypeContext.Provider>

      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle ? <Landing /> : <Login />}
      </div>
    </div>
  );
}

export default App;
