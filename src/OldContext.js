import React, { useContext } from 'react';

const OldContext = () => {
    const family = useContext(OldContext);

    return (
        <div>
            <h1> component OldContext: {family}</h1>
        </div>
    );
};

export default OldContext;