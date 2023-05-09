import React, { useContext } from 'react';
import { TvShowContext } from "./App";

const ShowContext = () => {
    const show = useContext(TvShowContext)
    return (
        <div>
            <h1>ShowContext: {show}</h1>
        </div>
    );
};

export default ShowContext;