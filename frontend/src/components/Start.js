import React from 'react';
import Heroimgphone from '../images/heroimgphone.jpg'
import Heroimgdesktop from '../images/heroimgdesktop.jpg'
import HotelRoom from '../images/hotelroom.jpg'
import Anno from '../images/anno1888.png'
import styled from 'styled-components'
import SlideShowYstad from 'components/SlideShowYstad'
import { Link } from 'react-router-dom';
import { OuterWrapper, InnerWrapper, H1, P, Image, Section, LastSection } from 'styles/MainStyles';

const Start = () => {

    return (
    <OuterWrapper>
        <HeroSection id="/">
          <StartText>Welcome to the family owned Hotel Prins Carl in Ystad</StartText>
          <HeroImagePhone src={Heroimgphone} alt="Reception" />
          <HeroImageDesktop src={Heroimgdesktop} alt="Reception" />
          <Button>
            <Link to='/book'>Book a room </Link>
          </Button>
          <Arrow><a href="#history"><span></span>DOWN</a></Arrow>
        </HeroSection>
        <InnerWrapper>
        <Section id="history">
          <Image src={Anno} alt="Anno 188" />
          <H1>Anno 1888</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. Praesent convallis tortor purus, sed facilisis ligula tempus in. Nullam varius, tortor et vestibulum molestie, dolor orci varius nisl, ut vestibulum arcu nunc sed mi. Proin ultrices nisl eu mi consectetur rhoncus. Sed cursus auctor ante, at sagittis felis aliquet quis. Sed egestas quam at luctus egestas. Morbi dapibus mauris nec feugiat varius.</P>
          <LinkButton>
            <Link to='/book'>Book a room </Link>
          </LinkButton>
        </Section>
        <Section id="ourrooms">
          <Image src={HotelRoom} alt="Hotel Room" />
          <H1>Our rooms</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. Praesent convallis tortor purus, sed facilisis ligula tempus in. Nullam varius, tortor et vestibulum molestie, dolor orci varius nisl, ut vestibulum arcu nunc sed mi. Proin ultrices nisl eu mi consectetur rhoncus. Sed cursus auctor ante, at sagittis felis aliquet quis. Sed egestas quam at luctus egestas. Morbi dapibus mauris nec feugiat varius.</P>
          <LinkButton>
            <Link to='/rooms'>Read more about our rooms </Link>
          </LinkButton>
        </Section>
        <LastSection id="ystad">
          <SlideShowYstad />
          <H1>Ystad</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. Praesent convallis tortor purus, sed facilisis ligula tempus in. Nullam varius, tortor et vestibulum molestie, dolor orci varius nisl, ut vestibulum arcu nunc sed mi.</P>
        </LastSection>
      </InnerWrapper>
    </OuterWrapper>
    )
}
export default Start;

const HeroSection = styled.section`
position: relative;
width: 100%;
`

const Arrow = styled.div`
  position: absolute;
  top: 75%;
  left: 45%;
  a{
  color: white;
  font-weight: bold;
  text-decoration: none;
  }
  @media (min-width: 668px) {
  top: 90%;
  }
`

const HeroImagePhone = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 668px) {
  display:none;
  }
`

const HeroImageDesktop = styled.img`
  display:none;
  @media (min-width: 668px) {
  display: unset;
  width: 100%;
  background-repeat: no-repeat;
  ackground-size: cover;
  }
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
    &:hover {
    cursor: pointer;
    font-style: italic;
 }
  a {
    color: #80000E;
    font-weight: bold;
    text-decoration: none;
  }

  @media (min-width: 668px) {
  font-size: 25px;
  }
`
const LinkButton = styled(Button)`
  top: 75%;
`



const StartText = styled.h1`
font-family: 'Playfair Display', serif;
position: absolute;
  top: 40%;
  left: 50%;
  width: 20vh;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 20px;
  color: #80000E;
  background-color:white;
    @media (min-width: 668px max-width: 1000px) {
    font-size: 30px;
    }
    @media (min-width: 668px) {
    font-size: 30px;
    width: 40vh;
    }
`