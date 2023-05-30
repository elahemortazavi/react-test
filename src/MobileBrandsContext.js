import React, { useContext } from "react";
import { MobileContext } from "./App";

const MobileBrandContext = () => {
  const brand = useContext(MobileContext);
  return (
    <div>
      <h1>component MobileBrandContext: {brand}</h1>
    </div>
  );
};

export default MobileBrandContext;
