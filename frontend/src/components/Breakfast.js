import React from 'react';
import SlideShowBreakfast from 'components/Slideshow/SlideShowBreakfast'
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
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
          <SlideShowBreakfast />
        <Highlight>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
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