import React, { useContext } from "react";
import { AgeContext } from "./App";

const BestSeller = () => {
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>component BestSeller: {age}</h1>
    </div>
  );
};

export default BestSeller;
