import React from 'react';
import PrinsCarl from '../images/Prins_Carl_1898.jpg'
import styled from 'styled-components';

const AboutUs = () => {

    return (
    <>
    <Wrapper>
    ANNO 1888
    <Image src={PrinsCarl} alt="Prins Carl portrait" />
    </Wrapper>
    </>
    )
}

export default AboutUs;

const Image = styled.img`
position: absolute;
height: 200px;
`

const Wrapper = styled.div`
margin-top: 50px;
width: 60vw;
height: 500px;
background-color: #FCF8E3;
`

