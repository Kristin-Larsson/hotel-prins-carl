import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from 'components/Start';
import Summary from 'components/Summary';
import AboutUs from 'components/AboutUs';
import Header from 'components/Header';
import GuestBook from 'components/GuestBook';
import Book from 'components/Book';
import Footer from 'components/Footer';
import Contact from 'components/Contact';

export const App = () => {
  return (
    <>
        <Header/>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/guestbook' element={<GuestBook />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </>
  );
}
