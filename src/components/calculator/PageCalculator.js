import React from 'react'
import Calculator from './Calculator'
import AboutCalculator from './AboutCalculator'
import { PageCalculatorContainer } from '../../css/CalculatorStyle'

export default function PageCalculator() {
  return (
    <PageCalculatorContainer>
      <Calculator />
      <AboutCalculator />
    </PageCalculatorContainer>
  )
}