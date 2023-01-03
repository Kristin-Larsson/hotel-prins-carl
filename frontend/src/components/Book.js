import React from 'react';
import Booking from 'components/Booking';

const Book = () => {

    return (
    <Wrapper>
    <Booking/>
    </Wrapper>
    )
}

export default Book;

const Wrapper = styled.div`
position: relative;
`