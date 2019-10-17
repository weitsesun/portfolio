import React from 'react'
import githubIcon from '../images/GitHub-Mark-64px.png'
import linkedInIcon from '../images/LI-In-Bug.png'
import resumeIcon from '../images/resume-icon.png'

import {
  ProfileBox,
  UpperLeftBox,
  ProfileGrid,
  ProfilePictureBorder,
  ProfilePicture,
  Name,
  IconBox,
  LinkIcons,
} from '../css/ComponentStyle'

export default function Profile() {
  return (
    <ProfileBox>
      <ProfileGrid className="profile-picture">
        <ProfilePictureBorder>
          <ProfilePicture />
        </ProfilePictureBorder>
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