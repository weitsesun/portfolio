import React from 'react'
import styled from 'styled-components'

export default function AboutMe() {
  return (
    <AboutMeGrid>
      <Header>About Me</Header>
      <P>Hey, it's Wayne. I’m a Software Engineer located in Bay Area. 
        I build websites by using React/Redux. I acknowledge in building 
        RESTful back-end system by using NodeJS and SQL/NoSQL databases. 
        I enjoy exploring new ideas from innovative websites and talented web designers. 
        (Check <Link href="https://www.awwwards.com/">here</Link> for the awards of web development)</P>
        <P>During my free time, I love traveling around the world especially 
          when it snows, I go snowboarding with my trusty Burton Custom X.</P>
        <P>Go check my projects➝ <Link href="https://www.github.com/weitsesun">Github</Link></P>
    </AboutMeGrid>
  )
}

const AboutMeGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: coral;
  color: white;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  padding-left: 3em;
  box-shadow: 3px 5px 5px 3px #ccc;
  text-align: justify; 
  max-width: 900px;
  min-width: 530px;
  max-height: 700px;

`
const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

const P = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 1.6em;
  width: 90%;
`

const Link = styled.a`
  color: cyan;
  text-decoration: none;
  &:visited {
    color: lightblue;
  }
`