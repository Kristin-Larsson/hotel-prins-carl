import React from 'react';
import Booking from 'components/Booking/Booking';
import HotelRoom from 'images/hotelroom.jpg'
import { Image } from 'styles/MainStyles';
import styled from 'styled-components'

const Book = () => {

    return (
    <>
    <StartSection>
    <Image src={HotelRoom} alt="Hotel Room" />
    </StartSection>
    <Booking/>
    </>
    )
}

export default Book;

export const StartSection = styled.section`
position: relative;
width: 100%;
margin-top: -15px;
`