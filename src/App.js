import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from './Basket/Basket';
import Home from './ShoppingPage/ShoppingPage';
import AboutUs from './Footer/AboutUs/AboutUs';
import Faqs from './Footer/FAQs/Faqs';
import Contact from './Footer/ContactUs/ContactUs';
import Login from './LogIn/Login';
import Register from './LogIn/Register';
import FirstHomePage from './LandingPage/LandingPage';
import Stores from './Stores/Stores';
import JoinUsForm from './LandingPage/JoinUsForm';
import BasketContext from './BasketContext/BasketContext';
import CheckoutPage from './Basket/CheckoutPage';
import ItemPage from './ManageItem/ItemPage';
import StoreManagement from './ManageStore/StoreManagement';

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
              <Route path="contact" element={<Contact />} />
              <Route path="manage-items" element={<ItemPage />} />
              <Route path="manage-store" element={<StoreManagement />} />
              <Route path="basket" element={<Basket />} />
              <Route path="joinus" element={<JoinUsForm />} />
              <Route path="checkout" element={<CheckoutPage />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketContext.Provider>
    </>
  );
}

export default App;