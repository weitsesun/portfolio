import React from 'react'
import styled from 'styled-components'
import '../css/App.css'
import Profile from './Profile'
import ProjectRender from './ProjectRender'


function App() {
  return (
    <Main className="App" >
      <Profile />
      <ProjectRender />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 95vh;
`

export default App;
