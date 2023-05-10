import React, { useContext } from "react";
import { PostcodeContext } from "./App";

const AddressContext = () => {
  const postcode = useContext(PostcodeContext);

  return (
    <div>
      <h1>AddressContext: {postcode}</h1>
    </div>
  );
};

export default AddressContext;
