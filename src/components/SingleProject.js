import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const SingleProjectBox = animated(animated.div)

export default function SingleProject({ project }) {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  return (
    <SingleProjectBox
      onMouseMove={() => setContainerStyle({ 
        transform: 'perspective(300px) scale(1.1)'})}
      onMouseLeave={() => setContainerStyle({ 
        transform: 'perspective(300px) scale(1)' })}
      style={{ ...SingleProjectContainer,
        transform: containerStyle.transform,
        }}
      onClick={() => window.open(project.github)}
      >
        <ImageContainer />
        <InfoContainer>
          <InfoHeader>{project.name}</InfoHeader>
          <Description>{project.description}</Description>
          <TechStackContainer>
            {project.techStack.map(tech =>
              <SingleTech key={project.name + '_tech'}>#{tech}</SingleTech>
            )}
          </TechStackContainer>
        </InfoContainer>
    </SingleProjectBox>
  )
}

const SingleProjectContainer = {
  width: '25%',
  maxWidth: '380px',
  height: 'auto',
  border: '1px solid white',
  borderRadius: '10px',
  minWidth: '300px',
  margin: '2% 1% 2% 1%',
  wordBreak: 'break-word',
  cursor: 'pointer',
}
  

const ImageContainer = styled.div`
  margin: 0;
  height: 400px;
  width: 100%;
`

const InfoContainer = styled.div`
  margin: 0;
  padding: 2%;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px white solid;
  font-family: 'Roboto', sans-serif;
`

const InfoHeader = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

const Description = styled.p`
  color: rgb(150, 150, 150);
  margin: 2px;
`

const TechStackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const SingleTech = styled.div`
  border-radius: 10%;
  padding: 5px;
  margin: 4px;
  background: rgb(79, 166, 207);
  color: white;
  font-size: .8rem;
`