import React, { useContext } from "react";
import { PhoneContext } from "./App";

const SoldCarsContext = () => {
  const sold = useContext(PhoneContext);
  return (
    <div>
      <h1>SoldCarsContext: {sold}</h1>
    </div>
  );
};

export default SoldCarsContext;
