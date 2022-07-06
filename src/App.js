import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from './Basket/Basket';
import Home from './HomePage/Home';
import Layout from './Layout/Layout.js';
import AboutUs from './AboutUs/AboutUs';
import Faqs from './FAQs/Faqs';
import ContactUs from './ContactUs/ContactUs';
import Login from './LogIn/Login';
import Register from './LogIn/Register';
import FirstHomePage from './FirstHomePage/FirstHomePage';
import BestSeller from './BestSeller/BestSeller';
import Stores from './Stores/Stores';
import JoinUsForm from './FirstHomePage/JoinUsForm';
import JoinUs from './FirstHomePage/JoinUs';
import BasketContext from './BasketContext/BasketContext';

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  const [basketItems, setBasketItems] = useState([]);

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
      <BasketContext.Provider value={{basketItems, setBasketItems}}>
        <BrowserRouter>
          <Routes>

            <Route path="/">
              <Route index element={<FirstHomePage />} />
              {/* <Route path='best-seller' element={<BestSeller />} /> */}
              <Route path="shopping" element={<Home />} />
              <Route path='Stores' element={<Stores />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="basket" element={<Basket />} />
              <Route path="joinus" element={<JoinUsForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </>
  );
}

export default App;