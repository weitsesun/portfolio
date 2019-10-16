import React from 'react'
import styled from 'styled-components'

export default function Calculator() {
  return (
    <CalculatorContainer>
      <div>previous bar</div>
      <div>current bar</div>
      <GridButton>7</GridButton>
      <GridButton>8</GridButton>
      <GridButton>9</GridButton>
      <GridButton>÷</GridButton>
      <GridButton>4</GridButton>
      <GridButton>5</GridButton>
      <GridButton>6</GridButton>
      <GridButton>×</GridButton>
      <GridButton>1</GridButton>
      <GridButton>2</GridButton>
      <GridButton>3</GridButton>
      <GridButton>-</GridButton>
      <GridButton>0</GridButton>
      <GridButton>.</GridButton>
      <GridButton>=</GridButton>
      <GridButton>+</GridButton>
    </CalculatorContainer>
  )
}

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-auto-rows: 100px;
`

const GridButton = styled.button`

`