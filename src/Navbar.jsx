import React from 'react';
import "./App.css"

const Navbar = (props) => {
    return (
      <div>
        <ul className="ul-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Social</li>
          <span>{props.about}</span>
        </ul>
      </div>
    );
};

export default Navbar;