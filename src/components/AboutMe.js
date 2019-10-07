import React from 'react'

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
        RESTful back-end system through NodeJS/Express and SQL/NoSQL databases. 
        I enjoy exploring new ideas from innovative websites and talented web designers. 
        (Check <Link href="https://www.awwwards.com/">here</Link> for the awards of web development)</P>
        <P>During my free time, I love traveling around the world especially 
          when it snows, I go snowboarding with my trusty Burton Custom X.</P>
        <P>Check my projects➝ 
          <Link href="https://www.github.com/weitsesun">Github</Link>
          <br/>
          Team projects➝ 
          <Link href="https://github.com/opensource-table">Open Source Table</Link>
          ,&nbsp;
          <Link href="https://github.com/hacker-home">Hacker Home</Link>
        </P>
    </AboutMeGrid>
  )
}
