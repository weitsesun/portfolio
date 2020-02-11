import React from 'react'
import Profile from './Profile'
import AboutMeContainer from './AboutMeContainer'
import ProjectRender from './ProjectRender'
import { GlobalStyle, Main } from '../css/ComponentStyle'

function App() {

  return (
    <>
      <Main className="App" >
        <GlobalStyle />
        <Profile />
        <AboutMeContainer />
        <ProjectRender />
      </Main>
    </>
  );
}



export default App;
