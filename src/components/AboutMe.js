import React from 'react'
import styled from 'styled-components'

export default function AboutMe() {
  return (
    <AboutMeGrid>
      <Header>About Me</Header>
      <P>Hey, it's Wayne. I’m a Software Engineer in Bay Area. I build websites using React/Redux. 
        And I am acknowledged to built RESTful back-end system using NodeJS and SQL/NoSQL databases. 
        I enjoy discovering new ideas from innovative websites and talented web designers.
        (Check <a href="https://www.awwwards.com/">here</a> for the awards of web development)</P>
        <P>When I'm not coding, I love to travel around the world and,  
          if there is snow on the mountain, I go snowboarding with my trusty Burton Custom X.</P>
        <P>Go right to play with my projects➝</P>
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
  width: 80%;
`