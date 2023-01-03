import React from 'react';
import Ystad from '../images/ystad.jpg'
import Anno from '../images/anno1888.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { OuterWrapper, InnerWrapper, H1, Image } from 'styles/MainStyles';

const Start = () => {

    return (
    <OuterWrapper>
        <HeroSection id="section01">
          <StartText>Welcome to family owned hotel Prins Carl in Ystad</StartText>
          <HeroImage src={Ystad} alt="Reception" />
          <Button>
            <Link to='/book'>Book a room </Link>
          </Button>
          <Arrow><a href="#section02"><span></span>DOWN</a></Arrow>
        </HeroSection>
        <InnerWrapper>
        <HistorySection id="section02">
          <Image src={Anno} alt="Anno 188" />
          <H1>Anno 1888</H1>
        </HistorySection>
      </InnerWrapper>
    </OuterWrapper>
    )
}
export default Start;

const HeroSection = styled.section`
position: relative;
`

const Arrow = styled.div`
  position: absolute;
  top: 95%;
  left: 45%;
    a{
    color: white;
    font-weight: bold;
    text-decoration: none;
    }
`

const HeroImage = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`
const Button = styled.button`
font-family: 'Playfair Display', serif;
position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: white;
  color: white;
  font-size: 16px;
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  a {
    color: #80000E;
    font-weight: bold;
    text-decoration: none;
  }
  @media (min-width: 668px) {
  font-size: 25px;
  }
`


const StartText = styled.h1`
font-family: 'Playfair Display', serif;
position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 20px;
  color: #80000E;
  background-color:white;
    @media (min-width: 668px) {
    font-size: 40px;
    }
`

const HistorySection = styled.section`
position: relative;
margin-top: 10px;
height: 100vh;
`