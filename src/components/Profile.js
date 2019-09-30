import React from 'react'
import styled from 'styled-components'

export default function Profile() {
  return (
    <div className="pfrofile">
      <UpperLeftBox />
      <ProfileGrid className="profile-picture">
        <ProfilePictureBorder>
          <ProfilePicture />
        </ProfilePictureBorder>
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