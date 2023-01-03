import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

import Start from 'components/Start';
import Summary from 'components/Summary';
import AboutUs from 'components/AboutUs';
import Header from 'components/Header';
import GuestBook from 'components/GuestBook';
import Book from 'components/Book';

export const App = () => {
  return (
    <>
    <OuterWrapper>
      <InnerWrapper>
        <Header/>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/guestbook' element={<GuestBook />} />
          <Route path='/book' element={<Book />} />
          </Routes>
        </BrowserRouter>
      </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
