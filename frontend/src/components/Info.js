import React from 'react';
import Phone from '../images/oldcall.jpg'
import Parking from '../images/parking.jpg'
import Keys from '../images/keys.jpg'
import { OuterWrapper, InnerWrapper, Section, SectionContainer, H1, Image, ImageFirst, ImageLast, P } from 'styles/MainStyles';
import Footer from 'components/Footer';
import styled from 'styled-components';

const Contact = () => {

    return (
    <>
    <OuterWrapper>
        <InnerWrapper>
        <Section id="info">
          <SectionContainer>
          <Image src={Phone} alt="Anno 188" />
          <div>
          <H1>Contact us</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          <Highlight>
          <P>Phone 040-404040</P>
          <P>Mail hotelprinscarl@mail.com</P>
          </Highlight>
          </div>
          </SectionContainer>
        </Section>

        <Section id="info">
          <SectionContainer>
          <ImageFirst src={Parking} alt="car" />
          <div>
          <H1>Find your way</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          <Highlight>
          <P>Parking</P>
          <P>Mail hotelprinscarl@mail.com</P>
          </Highlight>
          </div>
          <ImageLast src={Parking} alt="car" />
          </SectionContainer>
        </Section>

        <Section id="info">
          <SectionContainer>
          <Image src={Keys} alt="Anno 188" />
          <div>
          <H1>Your Booking</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          <Highlight>
          <P>Rummen är utrustade med</P>
          <P>Check in time</P>
          <P>Cancel booking</P>
          </Highlight>
          </div>
          </SectionContainer>
        </Section>
    </InnerWrapper>
    </OuterWrapper>
    <Footer/>
    </>
    )
}

export default Contact;

export const Highlight = styled.div`
padding-top: 20px;
`