import styled from 'styled-components'


export const PageCalculatorContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 40, 30, .9);
  flex-wrap: wrap;
  padding: 2rem;
  scroll-snap-align: center;
  @media (max-width: 1000px) {
    scroll-snap-align: none;
  }
`
export const CalculatorContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 5.5rem;
  grid-template-rows: minmax(3rem, auto) minmax(4rem, auto);
  grid-gap: 1px black;
  padding: 0;
  margin: 0;
  width: 30%;
  min-width: 340px;
  max-width: 420px;
  border: 1px solid white;
  box-shadow: 15px 15px rgba(0, 0, 0, 0.2);
  height: fit-content;
  border-radius: 5px;
`

export const PreviousCalculation = styled.div`
  font-size: 1.5rem;
  grid-column: span 4;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgb(47, 47, 47);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
  border-radius: 5px 5px 0 0;
`

export const CurrentCalculation = styled.div`
  font-size: 2.6rem;
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

export const NumberButton = styled.button`
  font-size: 2rem;
  background-color: rgba(80, 200, 250, 0.9);
  color: white;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 200, 250, 0.5);
    transition: 200ms;
  }
`

export const OperationButton = styled.button`
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
    transition: 200ms;
  }
`

export const ACButton = styled.button`
  grid-column: span 2;
  font-size: 2rem;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: rgba(250, 80, 80, 0.9);
  &:hover {
    background-color: rgba(250, 80, 80, 0.5);
    transition: 200ms;
  }
`

export const EqualButton = styled.button`
  grid-column: span 2;
  font-size: 2rem;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: rgba(245, 200, 90, 0.9);
  &:hover {
    background-color: rgba(245, 200, 90, 0.5);
    transition: 200ms;
  }
`

export const AboutCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: fit-content;
  color: white;
  padding-left: 5%;
  min-height: 530px;
  width: fit-content;
  border-radius: 20px;
  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
    align-items: center;
    text-align: center;
  }
`