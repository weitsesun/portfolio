import React from 'react'
import SingleProject from './SingleProject'
import styled from 'styled-components'
import { projectData } from '../projectData'

export default function ProjectRender() {
  return (
    <ProjectContainer>
      <ProjectHeader>My Recent Projects</ProjectHeader>
      <Projects>
        {projectData.map(project =>
          <SingleProject project={project} />
        )}
      </Projects>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-top: 20px solid black; */
  /* background: linear-gradient(90deg, white 70%, black 70%); */
`

const ProjectHeader = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  color: black;
  height: 15vh;
  display: flex;
  text-align: center;
  align-items: center;
  /* background: yellow; */
`

const Projects = styled.div`
  height: 85vh;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`