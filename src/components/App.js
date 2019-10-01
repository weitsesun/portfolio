import React from 'react'
import Profile from './Profile'
import ProjectRender from './ProjectRender'
import { GlobalStyle, Main } from '../css/ComponentStyle'

function App() {
  return (
      <Main className="App" >
        <GlobalStyle />
        <Profile />
        <ProjectRender />
      </Main>
  );
}



export default App;
