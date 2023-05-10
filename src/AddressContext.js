import React, { useContext } from "react";
import { PostcodeContext } from "./App";

const AddressContext = () => {
  const email = useContext(PostcodeContext);

  return (
    <div>
      <h1>AddressContext: {postcode}</h1>
    </div>
  );
};

export default AddressContext;
