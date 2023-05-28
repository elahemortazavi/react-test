import React, { useContext } from "react";
import { BestSoldContext } from "./App";

const BestSeller = () => {
  const age = useContext(BestSoldContext);
  return (
    <div>
      <h1>component BestSeller: {age}</h1>
    </div>
  );
};

export default BestSeller;
