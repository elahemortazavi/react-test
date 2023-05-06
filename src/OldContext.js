import React, { useContext } from 'react';
import { FamilyContext } from './App';

const OldContext = () => {
    const family = useContext(FamilyContext);

    return (
        <div>
            <h1> component OldContext: {family}</h1>
        </div>
    );
};

export default OldContext;