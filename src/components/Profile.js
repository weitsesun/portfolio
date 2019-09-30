import React from 'react'
import styled from 'styled-components'

export default function Profile() {
  return (
    <div className="pfrofile">
      <UpperLeftBox />
      <ProfileGrid className="profile-picture">
        <ProfilePicture />
      </ProfileGrid>
    </div>
  )
}

const UpperLeftBox = styled.div`
  width: 100px;
  height: 100px;
  background: hsl(250, 100%, 50%);
`

const ProfileGrid = styled.div`
  position: relative;
  top: -70px;
  left: 30px;
  width: 30%;
  height: 90vh;
  background: hsl(200, 100%, 50%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  border: 3px white solid;
  border-radius: 50%;
`