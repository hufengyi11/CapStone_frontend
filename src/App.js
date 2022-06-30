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
<<<<<<< HEAD
import Preferences from './LogIn/Preferences/Preferences';
import Dashboard from './LogIn/Dashboard/Dashboard';
import useToken from './LogIn/useToken';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

=======
import FirstHomePage from './FirstHomePage/FirstHomePage';


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
>>>>>>> main

  return (
    <>
       
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Layout />}>
            <Route index element={<FirstHomePage />} />
            <Route path="shopping" element={<Home />} />
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