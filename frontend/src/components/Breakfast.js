import React from 'react';
import SlideShowYstad from 'components/Slideshow/SlideShowYstad'
import { OuterWrapper, InnerWrapper, Section, H1, P } from 'styles/MainStyles';
import Footer from 'components/Footer';
import styled from 'styled-components';

const Breakfast = () => {

    return (
    <>
    <OuterWrapper>
        <InnerWrapper>
        <Section id="info">
        <H1>Breakfast is included</H1>
          <P>Text om frukost och event som ni har med gästkockar på kvällarna</P>
          <SlideShowYstad />
        <Highlight>
          <P>kom och ät frukost hos oss utan att bo på hotellet 100kr</P>
          </Highlight>
        </Section>

    </InnerWrapper>
    </OuterWrapper>
    <Footer/>
    </>
    )
}

export default Breakfast;

export const Highlight = styled.div`
padding-top: 20px;
`