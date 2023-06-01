import React, { useContext } from "react";
import { GameTypeContext } from "./App";

const GameContext = () => {
  const game = useContext(GameTypeContext);
  return (
    <div>
      <h1>component GameContext: {game}</h1>
    </div>
  );
};

export default GameContext;
