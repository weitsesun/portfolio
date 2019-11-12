import React, { useState } from 'react'
import Profile from './Profile'
import ProjectRender from './ProjectRender'
import PageCalculator from './calculator/PageCalculator'
import { GlobalStyle, Main } from '../css/ComponentStyle'

function App() {

  return (
    <>
      <Main className="App" >
        <GlobalStyle />
        <Profile />
        <ProjectRender />
      </Main>
      <PageCalculator />
    </>
  );
}



export default App;
