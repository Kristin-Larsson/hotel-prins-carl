import React from 'react';
import GuestBookApp from 'components/Guestbook/GuestBookApp'
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const GuestBook = () => {

    return (
    <>
    <OuterWrapper>
    <InnerWrapper>
    <GuestBookApp/>
    </InnerWrapper>
    </OuterWrapper>
    </>
    )
}

export default GuestBook;
