import styled from 'styled-components';

export const HeroSection = styled.section`
position: relative;
width: 100%;
`

export const OverlayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
`

export const StartText = styled.h1`
font-family: 'Playfair Display', serif;
position: absolute;
width: 280px;
font-family: 'Playfair Display', serif;
font-size: 20px;
color: #80000E;
background-color:white;
  @media (min-width: 668px) {
  font-size: 40px;
  width: 680px;
  }
`

export const Button = styled.button`
  font-family: 'Playfair Display', serif;
  position: absolute;
  margin-top: 270px;
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
    &:hover {
    cursor: pointer;
    padding: 10px 16px;
 }
  a {
    color: #80000E;
    font-weight: bold;
    text-decoration: none;
  }
  @media (min-width: 668px) {
  font-size: 30px;
  margin-top: 350px;
  }
`


export const Arrow = styled.div`
  width: 55px;
  height: 55px;
  position: absolute;
  top: 85%;
  scroll-behavior: smooth;
  a{
  color: white;
  font-weight: bold;
  text-decoration: none;
  }
  @media (min-width: 668px) {
  top: 90%;
  }
`
export const Icon = styled.img`
width: 50px;
  @media (min-width: 668px) {
  }
`
export const ArrowRightIcon = styled.img`
  width: 16px;
  @media (min-width: 668px) {
  top: 90%;
  }
`

export const HeroImagePhone = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 668px) {
  display:none;
  }
`

export const HeroImageDesktop = styled.img`
  display:none;
  @media (min-width: 668px) {
  display: unset;
  height: 90vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  }
`