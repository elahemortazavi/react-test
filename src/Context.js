import React, { useContext } from 'react';
import { NameContext } from './App';

const Context = () => {
    const name = useContext(NameContext)
    return (
        <div>
            <h1> component context: {name}</h1>
        </div>
    );
};

export default Context;