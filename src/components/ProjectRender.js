import React from 'react'
import styled from 'styled-components';
import AboutMe from './AboutMe'

export default function ProjectRender() {
  return (
    <ProjectRenderBox>
      <AboutMe />
    </ProjectRenderBox>
  )
}

const ProjectRenderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 92vh;
  border: 1px solid black;
  border-radius: 2px;
`
