import React, { useContext } from "react";
import { AgeContext } from "./App";

const NewContext = () => {
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>component NewContext: {age}</h1>
    </div>
  );
};

export default NewContext;
