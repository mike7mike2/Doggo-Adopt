import React from 'react';
import './App.css';


function Header() {
  return (
    <header className="App-header">
      <div className="nav">
        <span className="navLogo">DOGGO</span>
        <input type="text" placeholder="Search.." className="navSearch"></input>
        <input className="navButt" type="submit"></input>
        <span className="navAdopt">ADOPT</span>
        <span className="navAbUs">ABOUT US</span>
      </div>
    </header>
  );
}

export default Header;
