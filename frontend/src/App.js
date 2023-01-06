import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from 'components/Start';
import Summary from 'components/Summary';
import Header from 'components/Header';
import GuestBook from 'components/Guestbook/GuestBook';
import Book from 'components/Booking/Book';
// import Info from 'components/Info';
// import Breakfast from 'components/Breakfast';
// import Events from 'components/Events';
// import AboutUs from 'components/AboutUs';

export const App = () => {
  return (
    <>
        <Header/>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/summary' element={<Summary />} />
          {/* <Route path='/events' element={<Events />} />
          <Route path='/aboutus' element={<AboutUs />} /> */}
          <Route path='/guestbook' element={<GuestBook />} />
          <Route path='/book' element={<Book />} />
          {/* <Route path='/info' element={<Info />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/breakfast' element={<Breakfast />} /> */}
          </Routes>
        </BrowserRouter>
        
    </>
  );
}
