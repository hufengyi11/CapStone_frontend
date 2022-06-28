import './App.css';
import React, { useState } from 'react';
import UserLogin from './LogIn/UserLogin';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Layout from './Layout/Layout.js';
import AboutUs from './AboutUs/AboutUs';
import Faqs from './FAQs/Faqs';
import ContactUs from './ContactUs/ContactUs';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="userlogin" element={<UserLogin />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;