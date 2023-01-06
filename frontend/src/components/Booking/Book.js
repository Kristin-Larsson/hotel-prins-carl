import React from 'react';
import Booking from 'components/Booking/Booking';
import HotelRoom from 'images/hg8.jpg'
import styled from 'styled-components'
import { OuterWrapper } from 'styles/MainStyles';

const Book = () => {

    return (
    <>
    <OuterWrapper>
    <StartSection>
    <ImageBooking src={HotelRoom} alt="Hotel Room" />
    </StartSection>
    <Booking/>
    </OuterWrapper>
    </>
    )
}

export default Book;

export const StartSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (min-width: 668px) {
    background-color: white;
    width: 80%;
    max-width: 1340px;
    }
`

export const ImageBooking = styled.img`
position: relative;
width: 100%;

`

    