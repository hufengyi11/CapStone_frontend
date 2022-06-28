import './App.css';
import Home from './HomePage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Navigation /> */}
            <Route path='/' element={<Navigation />}>
             <Route index element={<Home/>} />
            {/* <Route component={Home}/> */}
           </Route>
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
