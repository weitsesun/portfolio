import React from 'react'
import { Header, P } from '../../css/ComponentStyle'
import styled from 'styled-components'

export default function AboutCalculator() {
  return (
    <AboutCalculatorContainer>
      <Header 
        shadow="true"
        w="400px"
      >Mini Calculator
      </Header>
      <P w='400px'>
        <b>
          Tech Stack:
        </b>
        <br/>
        ReactJS<br/>
        Styled Component
      </P>
      <P w='400px'>
        <b>
          Note: 
        </b>
        <br/>
        Just a simple ReactJS project to play with the React Hooks.
      </P>
    </AboutCalculatorContainer>
  )
}

const AboutCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: fit-content;
  color: white;
  padding: 2rem;
  min-height: 530px;
  width: fit-content;
  border-radius: 20px;
  font-style: italic;
`