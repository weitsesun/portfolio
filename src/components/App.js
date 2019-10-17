import React from 'react'
import Profile from './Profile'
import ProjectRender from './ProjectRender'
import PageCalculator from './calculator/PageCalculator'
import { GlobalStyle, Main, UpperLeftBox } from '../css/ComponentStyle'

function App() {
  return (
    <>
      <Main className="App" >
        <GlobalStyle />
        {/* <UpperLeftBox /> */}
        <Profile />
        <ProjectRender />
        {/* <UpperLeftBox /> */}
      </Main>
      <PageCalculator />
    </>
  );
}



export default App;
