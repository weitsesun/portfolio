import React, { useRef } from 'react'
import '../styles/App.css';
import Logo from './Logo';
import IconLinks from './IconLinks';
import Greetings from './Greetings'
import ArrowDown from './ArrowDown'
import Skills from './Skills'

export default function App() {
  const arrowTarget = useRef(null);

  return (
    <div className="main">
      <div className="landing-page">
        <Logo/>
        <IconLinks/>
        <Greetings />
        <ArrowDown arrowTarget={arrowTarget}/>
      </div>

      <div ref={arrowTarget} className="skills-page" >
        <Skills />
      </div>
    </div>
  )
}
