import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuPage from './routes/MenuPage';
import ReservationPage from './routes/ReservationPage';
import ContactPage from './routes/ContactPage';


ReactDOM.render(
  <BrowserRouter basename='/react-bestfood'>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/menu' element={<MenuPage/>} />
      <Route path='/reservation' element={<ReservationPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);