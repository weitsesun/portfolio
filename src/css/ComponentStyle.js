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
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  @media (max-width: 1000px) {
    display:flex;
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
  background: white;
  color: black;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  text-align: justify; 
  padding: 5% 0;
  scroll-snap-align: center;
  @media (max-width: 1000px) {
    max-height: none;
    max-width: none;
    min-height: none;
    padding: 0;
    box-shadow: none;
    width: 100%;
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
  cursor: crosshair;
  width: ${props => props.w ? props.w : '65%'};
  @media (max-width: 1000px) {
    font-size: 1.8rem;
    height: 100%;
    width: 85%;
    display: ${p => p.mobileView ? 'none' : 'normal'};
  }
`

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  background-color: black;
  &:visited {
    color: black;
  }
`


export const ProfileBox = styled.div`
  padding-top: 0;
  height: 100%;
  min-width: 30%;
  @media (max-width: 1000px) {
    padding-top: 0;
    width: 100%;
    height: auto;
  }
`
export const UpperLeftBox = styled.div`
  grid-column: span 2;
  width: 100%;
  background: rgba(0,0,0,1);
  @media (max-width: 1000px) {
    display: none;
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
  height: 100%;
  min-height: 530px;
  /* background: rgba(0, 180, 255, 1); */
  background: black;
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
  width: 60%;
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
  font-size: 2.5rem;
  font-weight: 900;
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
  transition: 0.2s;

  &:hover {
    border-radius: 5px;
    background-color: rgb(209, 209, 26);
    transform: scale(1.2);
  }
  @media (max-width: 1000px) {
    height: 5rem;
    width: 5rem;
  }
`