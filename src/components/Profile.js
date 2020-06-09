import React from 'react'
import githubIcon from '../images/GitHub-Mark-64px.png'
import linkedInIcon from '../images/LI-In-Bug.png'
import resumeIcon from '../images/resume-icon.png'

import { useSpring, animated } from 'react-spring'

import {
  ProfileBox,
  ProfileGrid,
  ProfilePictureBorder,
  ProfilePicture,
  Name,
  IconBox,
  LinkIcons,
} from '../css/ComponentStyle'

const MY_NAME = 'WEI-TSE SUN'
const D = 1.6
const DEGREE = `${D}deg`

const FlowAnimate = animated(animated.div)
const ScaleAnimate = animated(animated.div)

export default function Profile() {
  const [scale, setScale] = useSpring(() => ({
    transform: 'perspective(300px) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  const autoFlow = useSpring({
    from: {
      transform: `perspective(500px) rotateX(-${DEGREE}) rotateY(${DEGREE}) scale(1)`,
      width: '100%', 
      display: 'flex', 
      'align-items': 'center',
      'justify-content': 'center',},
    to: async next => {
      while(1) {
        await next({transform: `perspective(500px) rotateX(-${DEGREE}) rotateY(${DEGREE}) scale(1)`})
        await next({transform: `perspective(500px) rotateX(-${DEGREE}) rotateY(-${DEGREE}) scale(1)`})
        await next({transform: `perspective(500px) rotateX(${DEGREE}) rotateY(-${DEGREE}) scale(1)`})
        await next({transform: `perspective(500px) rotateX(${DEGREE}) rotateY(${DEGREE}) scale(1)`})
      }
    },
    config: {duration: 130, mass: 500, tension: 30, friction: 300},
  })

  return (

    <ProfileBox>
      <ProfileGrid className="profile-picture">
        <FlowAnimate style={ autoFlow } >
          <ScaleAnimate 
          onMouseMove={() => setScale({ 
            transform: 'perspective(300px) scale(1.2)'})}
          onMouseLeave={() => setScale({ 
            transform: 'perspective(300px) scale(1)' })}
          style={{
            width: '100%', 
            display: 'flex', 
            'align-items': 'center',
            'justify-content': 'center',
            cursor: 'cell',
            transform: scale.transform,
          }}
          >
            <ProfilePictureBorder>
              <ProfilePicture />
            </ProfilePictureBorder>
          </ScaleAnimate>
        </FlowAnimate>

        <Name>
          {MY_NAME}
        </Name>
        <IconBox>
          <LinkIcons
            icon={githubIcon}
            onClick={() => { window.open('https://github.com/weitsesun') }}
          />
          <LinkIcons
            icon={linkedInIcon}
            onClick={() => { window.open('https://www.linkedin.com/in/weitse-sun') }}
          />
          <LinkIcons
            icon={resumeIcon}
            onClick={() => { window.open('https://www.dropbox.com/s/vc4iamlgdm0y31k/WeiTse_Sun_Resume.pdf?dl=0') }}
          />
        </IconBox>
      </ProfileGrid>
    </ProfileBox>
  )
}