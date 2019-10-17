import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  body {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: auto;
    padding:0;
    margin: 0;
    scroll-snap-type: y mandatory;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    height: 100%;
    scroll-snap-align: none;
  }
`

export const ProjectRenderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: auto;
  @media (max-width: 1000px) {
    height: auto;
  }
`

export const AboutMeGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: coral;
  color: white;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  text-align: justify; 
  padding: 0;
  scroll-snap-align: center;
  @media (max-width: 1000px) {
    max-height: none;
    max-width: none;
    min-height: none;
    padding: 0;
    box-shadow: none;
    width: 100vw;
    align-items: center;
    scroll-snap-align: none;
  }
`
export const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2.2rem;
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  width: ${props => props.w ? props.w : 'auto'};
  text-shadow: ${props => props.shadow? '13px 13px rgba(0,0,0,.3)':'none'};
  @media (max-width: 1000px) {
    font-size: 2.2rem;
  }
`

export const P = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  line-height: 1.6em;
  font-size: 1.5rem;
  height: 100%;
  width: ${props => props.w ? props.w : '65%'};
  @media (max-width: 1000px) {
    font-size: 1.8rem;
    height: 100%;
    width: 85%;
  }
`

export const Link = styled.a`
  color: cyan;
  text-decoration: none;
  &:hover {
    background-color: midnightblue;
  }
  &:visited {
    color: lightblue;
  }
`

export const ProfileBox = styled.div`
  padding-top: 0;
  height: auto;
  @media (max-width: 1000px) {
    padding-top: 0;
    height: auto;
  }
`
export const UpperLeftBox = styled.div`
  display: block;
  width: 100%;
  padding-top: 4rem;
  background: hsl(174, 59%, 61%);
  @media (max-width: 1000px) {
    width: 100vw;
    padding-top: 0;
    height: 100px;
    box-shadow: none;
  }
`

export const ProfileGrid = styled.div`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  max-width: auto;
  min-width: 250px;
  height: 95%;
  min-height: 530px;
  background: hsl(200, 100%, 50%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    top: 0px;
    height: 100%;
    left: 0;
    padding: 10% 5%;
    max-width: 100%;
    box-shadow: none;
  }
`

export const ProfilePictureBorder = styled.div`
  width: 30%;
  max-width: 300px;
  padding-top: 0%;
  border: 3px white solid;
  border-radius: 50%;
  @media (max-width: 1000px) {
    width: 40%;
  }
`

export const ProfilePicture = styled.div`
  content: url('https://wtsesun.s3.us-east-2.amazonaws.com/portfolio/profile_picture/profile_picture2.JPG');
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
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
`

export const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  max-width: 300px;
  @media (max-width: 1000px) {
    width: 50%;
  }
`

export const LinkIcons = styled.span`
  content: url(${props => props.icon});
  height: 4rem;
  width: 4rem;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  transition: 0.1s;
  border: 0.5px solid transparent;

  &:hover {
    border: 0.5px solid white;
    border-radius: 5px;
    background-color: midnightblue;
  }
  @media (max-width: 1000px) {
    height: 5rem;
    width: 5rem;
  }
`