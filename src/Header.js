import React from 'react';
import './App.css';


function Header() {
  return (
    <header className="App-header">
      <div className="nav">
        <span className="navLogo">DOGGO</span>
        <input type="text" placeholder="Search.." className="navSearch"></input>
        <input className="navButt" type="submit"></input>
        <div className="nav-adopt-dropdown">
        <span>ADOPT</span>
          <div className="adopt-dropdown-content">
            <span>Adopt</span>
            <span>Dogs</span>
            <span>Cats</span>
            <span>More</span>
          </div>  
        </div>
        <span className="navAbUs">ABOUT US</span>
      </div>
    </header>
  );
}

export default Header;
