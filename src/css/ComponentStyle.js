import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255, 255, 255);
    width: 95%;
    height: auto;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 95vh;
`

export const ProjectRenderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 92vh;
`

export const AboutMeGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: coral;
  color: white;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  padding-left: 3em;
  box-shadow: 3px 5px 5px 3px #ccc;
  text-align: justify; 
  max-width: 900px;
  min-width: 530px;
  max-height: 700px;

`
export const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

export const P = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 1.6em;
  width: 90%;
`

export const Link = styled.a`
  color: cyan;
  text-decoration: none;
  &:visited {
    color: lightblue;
  }
`


export const ProfileBox = styled.div`
  padding-top: 5%;
`
export const UpperLeftBox = styled.div`
  display: block;
  width: 100px;
  padding-top: 100px;
  background: hsl(174, 59%, 61%);
  box-shadow: 3px 5px 5px 3px #ccc;
`

export const ProfileGrid = styled.div`
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

export const ProfilePictureBorder = styled.div`
  width: 60%;
  padding-top: 0%;
  border: 3px white solid;
  border-radius: 50%;
`

export const ProfilePicture = styled.div`
  content: url('../images/profile_picture.jpeg');
  width: 100%;
  object-fit: contain;
  border-radius: 50%;
  padding: 0;
`

export const Name = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 10px;
  text-align: center;
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`

export const LinkIcons = styled.span`
  content: url(${props => props.icon});
  height: 35px;
  width: 35px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  transition: 0.1s;
  border: 0.5px solid transparent;

  &:hover {
    border: 0.5px solid white;
    border-radius: 5px;
    /* box-shadow: 1px 3px 3px 1px #ccc; */
    background-color: midnightblue;
  }
`