import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

import Start from 'components/Start';
import Summary from 'components/Summary';
import AboutUs from 'components/AboutUs';
import Header from 'components/Header';

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
          </Routes>
        </BrowserRouter>
      </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
