import React from 'react';

const Cars = (props) => {
    return (
      <div>
        <p>i have a car:</p>
        <p>model: {props.model}</p>
        <p>model: {props.speed}</p>
      </div>
    );
};

export default Cars;