import React, { useState }from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';

import Start from 'components/Start';
import Summary from 'components/Summary';
import Header from 'components/Header/Header';
import GuestBook from 'components/Guestbook/GuestBook';
import Book from 'components/Booking/Book';
import Info from 'components/Info';
import Breakfast from 'components/Breakfast';
import Events from 'components/Events';
import AboutUs from 'components/AboutUs';

export const App = () => {
  const [locale, setLocale] = useState(i18n.language);
  const [loading, setLoading] = useState(false)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));


  return (
    <>
    <BrowserRouter>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Header/>
      <Container>
        </Container>
          <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/events' element={<Events />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/guestbook' element={<GuestBook />} />
          <Route path='/book' element={<Book />} />
          <Route path='/info' element={<Info />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='*' element={<Navigate to="/" />} />
          </Routes>
                    
    </LocaleContext.Provider>
        </BrowserRouter>
    </>
  );
}