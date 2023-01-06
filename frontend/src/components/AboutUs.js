import React from 'react';
import PrinsCarl from '../images/Prins_Carl_1898.jpg'
import Owners from '../images/owners.jpg'
import Princess from '../images/princess.jpg'
import { OuterWrapper, InnerWrapper, Section, SectionContainer, H1, Image, ImageFirst, ImageLast, P } from 'styles/MainStyles';
import Footer from 'components/Footer';
import styled from 'styled-components';

const AboutUs = () => {

    return (
    <>
    <OuterWrapper>
        <InnerWrapper>
        <Section id="info">
          <SectionContainer>
          <Image src={PrinsCarl} alt="Anno 188" />
          <div>
          <H1>Anno 1888</H1>
          <P>Once upon a time...</P>
          <Highlight>
          <P>Lorem ipsum dolor sit amet</P>
          </Highlight>
          </div>
          </SectionContainer>
        </Section>

        <Section id="info">
          <SectionContainer>
          <ImageFirst src={Owners} alt="car" />
          <div>
          <H1>Rubrik</H1>
          <P>Det var en gång en familj </P>
          </div>
          <ImageLast src={Owners} alt="car" />
          </SectionContainer>
        </Section>

        <Section id="info">
          <SectionContainer>
          <Image src={Princess} alt="Anno 188" />
          <div>
          <H1>Our friends</H1>
          <P>Det var en gång en prins med många vänner och stor spretig familj </P>
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

export default AboutUs;

export const Highlight = styled.div`
padding-top: 20px;
`

