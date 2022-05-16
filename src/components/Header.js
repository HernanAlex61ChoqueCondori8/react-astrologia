import React from 'react';
import './Header.css';

function Header(props){
  return (
    <header className="header">
      <h1 className="header__title">Luna 
        <img className="header__icon" alt="moon" src={props.icon}></img> magica</h1>
    </header>
  )
}

export default Header;