import React from 'react';
import logo from '../images/wei-tse-sun-logo.svg';
import '../styles/Logo.css';

export default function Logo() {

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
      <img onClick={() => scrollToTop()} className="logo" src={logo} alt="logo"/>
  )
}
