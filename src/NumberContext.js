import React, { useContext } from "react";
import { PhoneContext } from "./App";

const NumberContext = () => {
  const phone = useContext(PhoneContext);
  return (
    <div>
      <h1>NumberContext: {phone}</h1>
    </div>
  );
};

export default NumberContext;
