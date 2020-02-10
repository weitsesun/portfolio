import React from 'react'
import styled from 'styled-components'

export default function ProjectRender() {
  return (
    <ProjectContainer>
      <ProjectHeader>My Recent Projects</ProjectHeader>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`

const ProjectHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  color: black;
  height: 20%;
`