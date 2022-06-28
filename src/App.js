import './App.css';
import React, { useState } from 'react';
import UserLogin from './LogIn/UserLogin';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Layout from './Layout/Layout.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="userlogin" element={<UserLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;