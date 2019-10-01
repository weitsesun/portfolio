import React from 'react'
import styled from 'styled-components'
import githubIcon from '../images/GitHub-Mark-64px.png'
import linkedInIcon from '../images/LI-In-Bug.png'
import resumeIcon from '../images/resume-icon.png'

export default function Profile() {
  return (
    <ProfileBox>
      <UpperLeftBox />
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
const ProfileBox = styled.div`
  height: 98vh;
  width: 25%;
  min-width: 400px;
`
const UpperLeftBox = styled.div`
  width: 100px;
  padding-top: 100px;
  background: hsl(174, 59%, 61%);
  box-shadow: 3px 5px 5px 3px #ccc;
`

const ProfileGrid = styled.div`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  position: relative;
  top: -75px;
  left: 25px;
  width: 100%;
  max-width: 350px;
  min-width: 250px;
  height: 95%;
  min-height: 530px;
  background: hsl(200, 100%, 50%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 5px 5px 3px #ccc;
`

const ProfilePictureBorder = styled.div`
  width: 60%;
  padding-top: 0%;
  border: 3px white solid;
  border-radius: 50%;
`

const ProfilePicture = styled.div`
  content: url(https://wtsesun.s3.us-east-2.amazonaws.com/portfolio/profile_picture/profile_picture2.JPG);
  width: 100%;
  object-fit: contain;
  border-radius: 50%;
  padding: 0;
`

const Name = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: white;
  padding: 10px;
  text-align: center;
`

const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`

const LinkIcons = styled.span`
  content: url(${props => props.icon});
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`