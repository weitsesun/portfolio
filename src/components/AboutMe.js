import React from 'react'
import { useSpring, animated } from 'react-spring'

import {
  AboutMeGrid,
  Header,
  P,
  Link
} from '../css/ComponentStyle'

const ColorChanger = animated(animated.a)

export default function AboutMe() {
  const [paraStyle, setParaStyle] = useSpring(() => ({
    color: 'white',
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [paraStyle2, setParaStyle2] = useSpring(() => ({
    color: 'white',
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  const [paraStyle3, setParaStyle3] = useSpring(() => ({
    color: 'white',
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <AboutMeGrid>
      <Header>About Me</Header>

      <P>
        <ColorChanger
          onMouseMove={() => setParaStyle({ color: 'black' })}
          onMouseLeave={() => setParaStyle({ color: 'white' })}
          style={{ color: paraStyle.color}}>
          Hi, my name is Wayne. I’m a Software Engineer located in Bay Area.
          I build websites by using React/Redux. I acknowledge in building
          RESTful back-end system through NodeJS/Express and SQL/NoSQL databases.
          I enjoy exploring new ideas from innovative websites and talented web designers.
        (Check <Link onClick={(e) => {
            e.preventDefault();
            window.open("https://www.awwwards.com/")
          }}
          >here</Link> for the awards of web development)
          </ColorChanger>
      </P>
      <P>
      <ColorChanger
          onMouseMove={() => setParaStyle2({ color: 'black' })}
          onMouseLeave={() => setParaStyle2({ color: 'white' })}
          style={{ color: paraStyle2.color }}>
        During my free time, I love traveling around the world especially
          when it snows, I go snowboarding with my trusty Burton Custom X.
          </ColorChanger>
      </P>
      <P>
      <ColorChanger
          onMouseMove={() => setParaStyle3({ color: 'black' })}
          onMouseLeave={() => setParaStyle3({ color: 'white' })}
          style={{ color: paraStyle3.color }}>
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
        </ColorChanger>
      </P>


    </AboutMeGrid>
  )
}
