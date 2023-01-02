import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

import Start from 'components/Start';
import Summary from 'components/Summary';
import AboutUs from 'components/AboutUs';
import Header from 'components/Header';
import GuestBook from 'components/GuestBook';

export const App = () => {
  return (
    <>
    <Header/>
    <OuterWrapper>
      <InnerWrapper>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/guestbook' element={<GuestBook />} />
          </Routes>
        </BrowserRouter>
      </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
