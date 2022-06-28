import './App.css';
import Home from './HomePage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Route>
             <Route path="/home" element={<Home/>} />
            <Route component={Home}/>
           </Route>
        </div> 
      </BrowserRouter>
  );
}

export default App;
