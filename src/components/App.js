import React, { useState } from 'react'
import Profile from './Profile'
import ProjectRender from './ProjectRender'
import PageCalculator from './calculator/PageCalculator'
import { GlobalStyle, Main } from '../css/ComponentStyle'
import { handleMouseMove } from './handleMouseMove'

function App() {
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)

  return (
    <div onMouseMove={ (e) => handleMouseMove(e, setX, setY) }>
      <div style={{width: '30px',
                  height: '30px',
                  position: 'absolute',
                  top: `${y}px`,
                  left: `${x}px`,
                  background: 'black',
                  zIndex: 1,
                  padding: 0,
                  margin: 0,
                  borderRadius: '50%',
                  }}></div>


      <Main className="App" >
        <GlobalStyle />
        <Profile />
        <ProjectRender />
      </Main>
      <PageCalculator />
    </div>
  );
}



export default App;
