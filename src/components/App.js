import React from 'react'
import '../styles/App.css';
import Logo from './Logo';
import IconLinks from './IconLinks';
import Greetings from './Greetings'

export default function App() {
  return (
    <div className="main">
      <div className="landing-page">
        <Logo/>
        <IconLinks/>
        <Greetings />
      </div>
    </div>
  )
}
