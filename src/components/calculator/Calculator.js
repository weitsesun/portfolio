import React, { useState } from 'react'
import styled from 'styled-components'

export default function Calculator() {
  const [preDisplay, setPreDisplay] = useState('')
  const [curDisplay, setCurDisplay] = useState('')
  const [curOperator, setCurOperator] = useState(null);

  const handleNnumberClick = function(num) {
    setCurDisplay(prev => {
      return Number(prev.toString() + num.toString());
    })
  }

  const handleACClick = function() {
    setCurDisplay('');
    setPreDisplay('');
    setCurOperator(null);
  }

  const handleEqualClick = function() {
    let res = calculate();
    if(res !== undefined) {
      setPreDisplay('');
      setCurOperator(null);
      setCurDisplay(res);
    }
  }

  const handleOperatorClick = function(operator) {
    if(preDisplay.length !== 0 
      && curDisplay.length !== 0 
      && curOperator) {
        setPreDisplay(calculate().toString());
        setCurDisplay('')
      }
    else {
      setCurOperator(operator);
      if(preDisplay.length === 0) {
        setPreDisplay(curDisplay);
        setCurDisplay('');
      }
    }
  }

  const calculate = function() {
    if(preDisplay.length === 0 
      || curDisplay.length === 0 
      || !curOperator) return;
    let res = 0;
    switch(curOperator) {
      case '+':
        res = Number(preDisplay) + Number(curDisplay);
        break;
      case '-':
          res = Number(preDisplay) - Number(curDisplay);
          break;
      case '×':
        res = Number(preDisplay) * Number(curDisplay);
        break;
      case '÷':
        res = Number(preDisplay) / Number(curDisplay);
        break;
      default:
        break;
    }
    return res;
  }

  return (
    <CalculatorContainer>
      <PreviousCalculation>{`${preDisplay} ${curOperator ? curOperator : ''}`}</PreviousCalculation>
      <CurrentCalculation>{ curDisplay }</CurrentCalculation>
      <ACButton onClick={ () => handleACClick() }>AC</ACButton>
      <OperationButton del="true">DEL</OperationButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>÷</OperationButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>7</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>8</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>9</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>×</OperationButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>4</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>5</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>6</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>-</OperationButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>1</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>2</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>3</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>+</OperationButton>
      <NumberButton>.</NumberButton>
      <NumberButton onClick={(e) => handleNnumberClick(e.target.innerHTML)}>0</NumberButton>
      <EqualButton onClick={() => handleEqualClick()}>=</EqualButton>
    </CalculatorContainer>
  )
}

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-auto-rows: 5rem;
  grid-template-rows: 3rem 4rem;
  grid-gap: 1px black;
  margin: 2rem;
  padding: 0;
  width: fit-content;
  border: 1px solid white;
`

const PreviousCalculation = styled.div`
  font-size: 2rem;
  grid-column: span 4;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgb(47, 47, 47);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
`

const CurrentCalculation = styled.div`
  font-size: 3rem;
  padding-right: 5px;
  color: rgba(255, 255, 255, 0.9);
  grid-column: span 4;
  background-color: rgb(47, 47, 47);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NumberButton = styled.button`
  font-size: 2rem;
  background-color: rgba(80, 200, 250, 0.9);
  color: white;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 200, 250, 0.5);
  }
`

const OperationButton = styled.button`
  font-size: 2rem;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: 
  ${
    props => props.del ? 
      "rgba(250, 80, 80, 0.9)"
    : "rgba(245, 200, 90, 0.9)"
  };
  &:hover {
    background-color: 
  ${
    props => props.del ? 
      "rgba(250, 80, 80, 0.5)"
    : "rgba(245, 200, 90, 0.5)"
  };
  }
`

const ACButton = styled.button`
  grid-column: span 2;
  font-size: 2rem;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: rgba(250, 80, 80, 0.9);
  &:hover {
    background-color: rgba(250, 80, 80, 0.5);
  }
`

const EqualButton = styled.button`
  grid-column: span 2;
  font-size: 2rem;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: rgba(245, 200, 90, 0.9);
  &:hover {
    background-color: rgba(245, 200, 90, 0.5);
  }
`