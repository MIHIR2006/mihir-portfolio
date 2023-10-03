
import React from 'react';
import './Header.css';
import Typed from '../Typed'





const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <p>
          <div>
             I do 
          </div>
        <Typed/>
        </p>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;