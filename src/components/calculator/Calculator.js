import React, { useState } from 'react'
import styled from 'styled-components'

export default function Calculator() {
  const [preDisplay, setPreDisplay] = useState('')
  const [curDisplay, setCurDisplay] = useState('')
  const [curOperator, setCurOperator] = useState(null);

  const handleNumberClick = function(num) {
    if(num === '.') {
      if(curDisplay.includes('.')) return;
      if(curDisplay.length === 0) {
        num = '0.';
      }
    }
    setCurDisplay(prev => {
      return prev.toString() + num.toString();
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
      setCurDisplay(res.toString());
    }
  }

  const handleOperatorClick = function(operator) {
    if(curDisplay.length === 0) return;
    if(preDisplay.length !== 0 
      && curDisplay.length !== 0 
      && curOperator) {
        setPreDisplay(calculate().toString());
        setCurOperator(operator);
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
        res = parseFloat(preDisplay) + parseFloat(curDisplay);
        break;
      case '-':
          res = parseFloat(preDisplay) - parseFloat(curDisplay);
          break;
      case '×':
        res = parseFloat(preDisplay) * parseFloat(curDisplay);
        break;
      case '÷':
        res = parseFloat(preDisplay) / parseFloat(curDisplay);
        break;
      default:
        break;
    }
    return res;
  }

  const handleDelClick = function() {
    if(curDisplay.length > 0) {
      setCurDisplay(prev => {
        return prev.slice(0, prev.length - 1);
      })
    } else {
      return;
    }
  }

  return (
    <CalculatorContainer>
      <PreviousCalculation>{`${preDisplay} ${curOperator ? curOperator : ''}`}</PreviousCalculation>
      <CurrentCalculation>{ curDisplay }</CurrentCalculation>
      <ACButton onClick={ () => handleACClick() }>AC</ACButton>
      <OperationButton del="true" onClick={() => handleDelClick()}>DEL</OperationButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>÷</OperationButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>7</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>8</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>9</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>×</OperationButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>4</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>5</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>6</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>-</OperationButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>1</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>2</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>3</NumberButton>
      <OperationButton onClick={(e) => handleOperatorClick(e.target.innerHTML)}>+</OperationButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>.</NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>0</NumberButton>
      <EqualButton onClick={() => handleEqualClick()}>=</EqualButton>
    </CalculatorContainer>
  )
}

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-auto-rows: 5rem;
  grid-template-rows: minmax(3rem, auto) minmax(4rem, auto);
  grid-gap: 1px black;
  padding: 0;
  margin: 0;
  width: fit-content;
  border: 1px solid white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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
  word-wrap: break-word;
  word-break: break-all;
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