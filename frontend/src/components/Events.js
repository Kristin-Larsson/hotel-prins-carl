import React from 'react';
import SlideShowYstad from 'components/Slideshow/SlideShowYstad'
import { OuterWrapper, InnerWrapper, Section, SectionContainer, H1, Image, ImageFirst, ImageLast, P } from 'styles/MainStyles';
import Footer from 'components/Footer';
import styled from 'styled-components';
import Klas from '../images/klas.jpg'
import Instagram from '../images/insta.png'

const Breakfast = () => {

    return (
    <>
    <OuterWrapper>
        <InnerWrapper>
        <Section id="info">
        <H1>Event</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex.</P>
          <SlideShowYstad />
        <Highlight>
          </Highlight>
        </Section>
    
        <Section id="history">
          <SectionContainer>
          <Image src={Klas} alt="Anno 188" />
          <div>
          <H1>Galleri</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          </div>
          </SectionContainer>
        </Section>

        <Section id="history">
          <SectionContainer>
          <ImageFirst src={Instagram} alt="Anno 188" />
          <div>
          <H1>Följ med bakom kulisserna</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          </div>
          <ImageLast src={Instagram} alt="Anno 188" />
          </SectionContainer>
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