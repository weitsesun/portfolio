import React from 'react'
import Calculator from './Calculator'
import AboutCalculator from './AboutCalculator'
import styled from 'styled-components'

export default function PageCalculator() {
  return (
    <PageCalculatorContainer>
      <Calculator />
      <AboutCalculator />
    </PageCalculatorContainer>
  )
}

const PageCalculatorContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(84, 80, 150, 1);
  flex-wrap: wrap;
  padding: 2rem;
`

// const PageCalculatorContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 600px);
//   min-height: 100vh;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(84, 80, 150, 1);
//   padding: 2rem;
// `