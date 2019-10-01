import React from 'react'
// import styled from 'styled-components'
import {
  AboutMeGrid,
  Header,
  P,
  Link
} from '../css/ComponentStyle'

export default function AboutMe() {
  return (
    <AboutMeGrid>
      <Header>About Me</Header>
      <P>Hi, my name is Wayne. I’m a Software Engineer located in Bay Area. 
        I build websites by using React/Redux. I acknowledge in building 
        RESTful back-end system by using NodeJS and SQL/NoSQL databases. 
        I enjoy exploring new ideas from innovative websites and talented web designers. 
        (Check <Link href="https://www.awwwards.com/">here</Link> for the awards of web development)</P>
        <P>During my free time, I love traveling around the world especially 
          when it snows, I go snowboarding with my trusty Burton Custom X.</P>
        <P>Check my projects➝ <Link href="https://www.github.com/weitsesun">Github</Link></P>
    </AboutMeGrid>
  )
}
