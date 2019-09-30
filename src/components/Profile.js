import React from 'react'
import styled from 'styled-components'
import githubIcon from '../images/GitHub-Mark-64px.png'
import linkedinIcon from '../images/LI-In-Bug.png'

export default function Profile() {
  return (
    <div className="pfrofile">
      <UpperLeftBox />
      <ProfileGrid className="profile-picture">
        <ProfilePictureBorder>
          <ProfilePicture />
        </ProfilePictureBorder>
        <Name>
          WEI-TSE SUN
        </Name>
        <LinkIcons 
          icon={githubIcon} 
          onClick={() => {window.open('https://github.com/weitsesun')}}
          />
        <LinkIcons 
          icon={linkedinIcon} 
          onClick={() => {window.open('https://www.linkedin.com/in/weitse-sun')}}
          />
      </ProfileGrid>
    </div>
  )
}

const UpperLeftBox = styled.div`
  width: 100px;
  padding-top: 100px;
  background: hsl(250, 100%, 50%);
`

const ProfileGrid = styled.div`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  position: relative;
  top: -75px;
  left: 25px;
  width: 30%;
  height: 90vh;
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
  content: url(https://wtsesun.s3.us-east-2.amazonaws.com/portfolio/profile_picture/profile_picture.png);
  width: 100%;
  object-fit: contain;
  border-radius: 50%;
  padding: 0;
`

const Name = styled.div`
  color: white;
  padding: 10px;
`

const LinkIcons = styled.div`
  content: url(${props => props.icon});
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`