import React from 'react'
import styled from 'styled-components'

export default function AboutMe() {
  return (
    <AboutMeGrid>
      <Header>About Me</Header>
      <P>I’m a software engineer who is comfortable working with Javascript, 
        preferably React and REST architecture through NodeJS, Express, MongoDB and PostgreSQL. 
        I thrive on building high-quality systems and ensure that the architecture of the application 
        is built with well-designed and maintainable code.</P>
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
  width: 70%;
`