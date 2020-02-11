import React from 'react'
import SingleProject from './SingleProject'
import styled from 'styled-components'
import { projectData } from '../projectData'
import { useSpring, animated } from 'react-spring'

const ScaleChanger = animated(animated.div)

export default function ProjectRender() {
  const [headStyle, setHeadStyle] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <ProjectContainer>
      <ScaleChanger
        onMouseMove={() => setHeadStyle({
          transform: 'perspective(200px) scale(1)'
        })}
        onMouseLeave={() => setHeadStyle({
          transform: 'perspective(300px) scale(1)'
        })}
        style={{
          cursor: 'crosshair',
          width: '100%',
          display: 'flex',
          justifyContent:'center',
          transform: headStyle.transform,
        }}>
        <HeaderContainer>
          <ProjectHeader>My Recent Projects</ProjectHeader>
        </HeaderContainer>
      </ScaleChanger>
      <Projects>
        {projectData.map(project =>
          <SingleProject key={project.name} project={project} />
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
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  @media (max-width: 1000px) {
    height: auto;
    padding: 0;
    box-shadow: none;
    width: 100%;
    align-items: center;
    scroll-snap-align: none;
    text-align: center;
  }
`
const HeaderContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
const ProjectHeader = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  height: 15vh;
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  text-decoration: underline;
  text-decoration-color: rgb(178, 178, 53);
`

const Projects = styled.div`
  height: auto;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`