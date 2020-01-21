import React from 'react'
import { useSpring, animated } from 'react-spring'

import {
  AboutMeGrid,
  Header,
  P,
  Link
} from '../css/ComponentStyle'

const ScaleChanger = animated(animated.div)

export default function AboutMe() {
  const [headStyle, setHeadStyle] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [paraStyle, setParaStyle] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [paraStyle2, setParaStyle2] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [paraStyle3, setParaStyle3] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <AboutMeGrid>
      <ScaleChanger
          onMouseMove={() => setHeadStyle({ 
            transform: 'perspective(300px) scale(1.1)'})}
          onMouseLeave={() => setHeadStyle({ 
            transform: 'perspective(300px) scale(1)' })}
          style={{ 
            transform: headStyle.transform,
            }}>
      <Header>About Me</Header>
      </ScaleChanger>

      <P>
        <ScaleChanger
          onMouseMove={() => setParaStyle({ 
            transform: 'perspective(300px) scale(1.1)'})}
          onMouseLeave={() => setParaStyle({ 
            transform: 'perspective(300px) scale(1)' })}
          style={{ 
            transform: paraStyle.transform,
            }}>
          Hi, my name is Wayne. I’m a Software Engineer located in Bay Area.
          I build websites by using React/Redux. I acknowledge in building
          RESTful back-end system through NodeJS/Express and SQL/NoSQL databases.
          I enjoy exploring new ideas from innovative websites and talented web designers.
        {/* (Check <Link onClick={(e) => {
            e.preventDefault();
            window.open("https://www.awwwards.com/")
          }}
          >here</Link> for the awards of web development) */}
          </ScaleChanger>
      </P>
      <P>
      <ScaleChanger
          onMouseMove={() => setParaStyle2({ 
            transform: 'perspective(300px) scale(1.1)'})}
          onMouseLeave={() => setParaStyle2({ 
            transform: 'perspective(300px) scale(1)' })}
          style={{ 
            transform: paraStyle2.transform,
            }}>
        During my free time, I love traveling around the world especially
          when it snows, I go snowboarding with my trusty Burton Custom X.
          </ScaleChanger>
      </P>
      <P>
      <ScaleChanger
          onMouseMove={() => setParaStyle3({ 
            transform: 'perspective(300px) scale(1.1)'})}
          onMouseLeave={() => setParaStyle3({ 
            transform: 'perspective(300px) scale(1)' })}
          style={{ 
            transform: paraStyle3.transform,
            }}>
        Check my projects➝
          <Link onClick={(e) => {
          e.preventDefault();
          window.open("https://www.github.com/weitsesun")
        }}
        >Github</Link>
        <br />
        Team projects➝
          <Link onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/opensource-table")
        }}>Open Source Table</Link>
        ,&nbsp;
          <Link onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/hacker-home")
        }}>Hacker Home</Link>
        </ScaleChanger>
      </P>


    </AboutMeGrid>
  )
}
