import React from 'react';
import Ystad from '../images/ystad.jpg'
import Anno from '../images/anno1888.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { OuterWrapper, InnerWrapper, H1 } from 'styles/MainStyles';

const Start = () => {

    return (
    <OuterWrapper>
    <InnerWrapper>
    <HeroWrapper>
    <StartText>Welcome to family owned hotel Prins Carl in Ystad</StartText>
    <HeroImage src={Ystad} alt="Reception" />
    <Button>
    <Link to='/book'>Book a room </Link>
    </Button>
    </HeroWrapper>
    <H1>Anno 1888</H1>
    <Image src={Anno} alt="Anno 188" />
    </InnerWrapper>
    </OuterWrapper>
    )
}

export default Start;

const HeroWrapper = styled.div`
position: relative;
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

const Image = styled.img`
  width: 70%;
  height: auto;
`