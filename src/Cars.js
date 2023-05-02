import React from 'react';

const Cars = (props) => {
    return (
      <div>
        <p>i have a car:</p>
        <p>model: {props.model}</p>
        <p>speed: {props.speed}</p>
        <p> {props.children}</p>
      </div>
    );
};

export default Cars;


 