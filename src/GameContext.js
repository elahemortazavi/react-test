import React, { useContext } from "react";
import { AgeContext } from "./App";

const GameContext = () => {
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>component GameContext: {age}</h1>
    </div>
  );
};

export default GameContext;
