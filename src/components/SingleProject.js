import React from 'react'
import styled from 'styled-components'

export default function SingleProject({ project }) {
  return (
    <SingleProjectContainer>
      <ImageContainer/>
      <InfoContainer>
        <InfoHeader>{project.name}</InfoHeader>
        <Description>{project.description}</Description>
      </InfoContainer>
    </SingleProjectContainer>
  )
}

const SingleProjectContainer = styled.div`
  width: 30%;
  height: 70%;
  border: 1px solid black;
  border-radius: 10px;
  min-width: 300px;
  margin: 1%;
  word-break: break-word;
`
const ImageContainer = styled.div`
  margin: 0;
  height: 70%;
  width: 100%;
`

const InfoContainer = styled.div`
  margin: 0;
  padding: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px black solid;
  font-family: 'Roboto', sans-serif;
`

const InfoHeader = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

const Description = styled.p`
  color: rgb(150, 150, 150);
  margin: 2px 0 2px 0;
`