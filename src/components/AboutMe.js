import React from 'react'
import styled from 'styled-components'

export default function AboutMe() {
  return (
    <AboutMeGrid>
      <h1>About Me</h1>
    </AboutMeGrid>
  )
}

const AboutMeGrid = styled.div`
  background-color: white;
  width: 95%;
  height: 95%;
`