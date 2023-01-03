import React from 'react';
import Ystad from '../images/ystad.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Start = () => {

    return (
    <>
    <HeroWrapper>
    <StartText>Welcome to family owned hotel Prins Carl in Ystad</StartText>
    <Image src={Ystad} alt="Prins Carl Logo" />
    <Button>
    <Link to='/book'>Book a room </Link>
    </Button>
    </HeroWrapper>
    
    </>
    )
}

export default Start;

const HeroWrapper = styled.div`
position: relative;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`
const Button = styled.button`
font-family: 'Playfair Display', serif;
position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 25px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`

const StartText = styled.h1`
font-family: 'Playfair Display', serif;
position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 40px;
    color: white;
`