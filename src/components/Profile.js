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

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 5) / 20, 1.3]
const trans = (x, y, s) => `perspective(500px) rotateX(${3*x}deg) rotateY(${3*y}deg) scale(${s})`
const FlowAnimate = animated(animated.div)

export default function Profile() {
  const [flow, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 300, friction: 50 } }))

  return (

    <ProfileBox>
      <ProfileGrid className="profile-picture">
        <FlowAnimate
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: flow.xys.interpolate(trans), 
            width: '100%', 
            display: 'flex', 
            'align-items': 'center',
            'justify-content': 'center'
          }}
        >
          <ProfilePictureBorder>
            <ProfilePicture />
          </ProfilePictureBorder>
        </FlowAnimate>

        <Name>
          {'WEI-TSE SUN'}
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
            onClick={() => { window.open('https://www.dropbox.com/s/vn2gj0n79rjxpg5/WeiTse%28Wayne%29_Sun_Resume.pdf?dl=0') }}
          />
        </IconBox>
      </ProfileGrid>
    </ProfileBox>
  )
}