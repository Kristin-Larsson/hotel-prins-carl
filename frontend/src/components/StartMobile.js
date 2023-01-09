import React from 'react';
import Heroimgphone from '../images/heroimgphone.jpg'
import Heroimgdesktop from '../images/heroimgdesktop.jpg'
import HotelRoom from '../images/hotelroom.jpg'
import Anno from '../images/anno1888.png'
import ArrowIcon from '../icons/arrow-down.svg'
import ArrowIconRight from '../icons/right-arrow.svg'
import SlideShowYstad from 'components/Slideshow/SlideShowYstad'
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';
import { HeroSection, OverlayWrapper, StartText, Button, Arrow, Icon, ArrowRightIcon, HeroImageDesktop, HeroImagePhone } from 'components/StyleStart';
import { OuterWrapper, InnerWrapper, H1, P, Image, ImageFirst, ImageLast, Section, LastSection, SectionContainer } from 'styles/MainStyles';
import { useTranslation } from "react-i18next";

const StartMobile = () => {
const { t } = useTranslation();

    return (
    <>
    <OuterWrapper>
        <HeroSection id="/">
          <OverlayWrapper>
          <StartText>{t('welcome')}</StartText>
          <HeroImagePhone src={Heroimgphone} alt="Reception" />
          <HeroImageDesktop src={Heroimgdesktop} alt="Reception" />
          <Button>
              <Link to='/book'>{t('bookAroom')} </Link>
          </Button>
          <Arrow><a href="#history"><span></span><Icon src={ArrowIcon} alt="Prins Carl Logo"/></a></Arrow>
          </OverlayWrapper>
        </HeroSection>
        <InnerWrapper>
        <Section id="history">
          <SectionContainer>
          <Image src={Anno} alt="Anno 188" />
          <div>
          <H1>Anno 1888</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          <P><Link to='/book'>Book a room </Link><ArrowRightIcon src={ArrowIconRight} alt="Arrow pointing right"/></P>
          </div>
          </SectionContainer>
        </Section>
        <Section id="ourrooms">
          <SectionContainer>
          <ImageFirst src={HotelRoom} alt="Hotel Room" />
          <div>
          <H1>Our rooms</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar. Suspendisse vitae ante pulvinar, convallis lectus vitae, tincidunt ex. </P>
          <P><Link to='/rooms'>Read more about our rooms </Link><ArrowRightIcon src={ArrowIconRight} alt="Arrow pointing right"/></P>
          </div>
          <ImageLast src={HotelRoom} alt="Hotel Room" />
          </SectionContainer>
        </Section>
        <LastSection id="ystad">
            <SectionContainer>
          <SlideShowYstad />
          <div>
          <H1>Ystad</H1>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate commodo pulvinar.</P>
          </div>
        </SectionContainer>
        </LastSection>
      </InnerWrapper>
    </OuterWrapper>
    <Footer/>
    </>
    )
}
export default StartMobile;