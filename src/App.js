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


function App (){

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <>
       <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
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