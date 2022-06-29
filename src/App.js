import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Layout from './Layout/Layout.js';
import AboutUs from './AboutUs/AboutUs';
import Faqs from './FAQs/Faqs';
import ContactUs from './ContactUs/ContactUs';
import Login from './LogIn/Login';
import Register from './LogIn/Register';
import Preferences from './LogIn/Preferences/Preferences';
import Dashboard from './LogIn/Dashboard/Dashboard';
import useToken from './LogIn/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="preferences" element={<Preferences />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;