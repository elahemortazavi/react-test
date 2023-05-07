import React, { useContext } from 'react';
import { EmailContext } from './App';

const MediumContext = () => {
    const email = useContext(EmailContext);

    return (
        <div>
            <h1>MediumContext: {email}</h1>
        </div>
    );
};

export default MediumContext;