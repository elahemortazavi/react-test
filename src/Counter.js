import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const clickHandler = () => {
        setNumber(number + 1)
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={clickHandler}>up one</button>
        </div>
    );
};

export default Counter;