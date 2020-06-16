import React, { useRef } from 'react'
import '../styles/App.css';
import Logo from './Logo';
import Greetings from './Greetings'
import ArrowDown from './ArrowDown'
import Skills from './Skills'
import Projects from './Projects'

export default function App() {
  const arrowTarget = useRef(null);

  return (
    <div className="main">
      <div className="landing-page">
        <Logo/>
        <Greetings />
        <ArrowDown arrowTarget={arrowTarget}/>
      </div>

      <div ref={arrowTarget} className="skills-page" >
        <Skills />
      </div>

      <div className="projects-page">
        <Projects />
      </div>
    </div>
  )
}
