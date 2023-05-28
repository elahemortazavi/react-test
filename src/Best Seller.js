import React, { useContext } from "react";
import { BestSoldContext } from "./App";

const BestSeller = () => {
  const car = useContext(BestSoldContext);
  return (
    <div>
      <h1>component BestSeller: {car}</h1>
    </div>
  );
};

export default BestSeller;
