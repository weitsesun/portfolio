import React, { useState, useEffect } from 'react'
import { 
  CalculatorContainer,
  PreviousCalculation,
  CurrentCalculation,
  EqualButton,
  ACButton,
  OperationButton,
  NumberButton,
 } from '../../css/CalculatorStyle'

export default function Calculator() {
  const [preDisplay, setPreDisplay] = useState('')
  const [curDisplay, setCurDisplay] = useState('')
  const [curOperator, setCurOperator] = useState(null);
  const [realPreDisplay, setRealPreDisplay] = useState('');
  const [realCurDisplay, setRealCurDisplay] = useState('');

  useEffect(() => {
    setRealPreDisplay(displayLocalString(preDisplay));
    setRealCurDisplay(displayLocalString(curDisplay));
  },[preDisplay, curDisplay])

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

  const displayLocalString = function(numStr) {
    let numAry = numStr.split('.');
    let intDig = parseFloat(numAry[0]);
    let decDig = numAry[1];
    if(isNaN(intDig)) return '';
    intDig = intDig.toLocaleString('en', {maximumFractionDigits: 0});

    return decDig ? `${intDig}.${decDig}` : numStr.includes('.') ? `${intDig}.` : `${intDig}`;
  }

  return (
    <CalculatorContainer>
      <PreviousCalculation>{`${realPreDisplay} ${curOperator ? curOperator : ''}`}</PreviousCalculation>
      <CurrentCalculation>{ realCurDisplay }</CurrentCalculation>
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
      <NumberButton 
        onClick={(e) => handleNumberClick(e.target.innerHTML)}
        style={{"border-radius": '0 0 0 5px'}}
      >.
      </NumberButton>
      <NumberButton onClick={(e) => handleNumberClick(e.target.innerHTML)}>0</NumberButton>
      <EqualButton 
        onClick={() => handleEqualClick()}
        style={{"border-radius": '0 0 5px 0'}}
      >=
      </EqualButton>
    </CalculatorContainer>
  )
}





