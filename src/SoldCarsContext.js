import React, { useContext } from "react";
import { SoldContext } from "./App";

const SoldCarsContext = () => {
  const sold = useContext(SoldContext);
  return (
    <div>
      <h1>SoldCarsContext: {sold}</h1>
    </div>
  );
};

export default SoldCarsContext;
