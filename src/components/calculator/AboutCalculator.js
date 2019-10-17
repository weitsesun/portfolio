import React from 'react'
import { Header, P } from '../../css/ComponentStyle'
import { AboutCalculatorContainer } from '../../css/CalculatorStyle'


export default function AboutCalculator() {
  return (
    <AboutCalculatorContainer>
      <Header 
        shadow="true"
        w="400px"
        fontStyle='italic'
      >Mini Calculator
      </Header>
      <P w='330px'>
        <b>
          Tech Stack:
        </b>
        <br/>
        ReactJS<br/>
        Styled Component
      </P>
      <P w='330px'>
        <b>
          Note: 
        </b>
        <br/>
        Just a simple ReactJS project to play with the React Hooks.
      </P>
      <P w='330px' mobileView>
      ⟵ Play with it
      </P>
    </AboutCalculatorContainer>
  )
}