import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import '../css/App.css'

function App() {
  return (
    <Main className="App" >
      <Profile />
    </Main>
  );
}

const Main = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 95vh;
`

export default App;
