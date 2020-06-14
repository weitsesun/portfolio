import React from 'react';
import logo from '../images/wei-tse-sun-logo.svg';
import '../styles/Logo.css';

export default function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt="logo"/>
    </div>
  )
}
