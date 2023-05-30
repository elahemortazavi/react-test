import React, { useContext } from "react";
import { AgeContext } from "./App";

const MobileBrandContext = () => {
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>component MobileBrandContext: {age}</h1>
    </div>
  );
};

export default MobileBrandContext;
