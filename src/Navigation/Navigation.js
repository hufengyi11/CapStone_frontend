import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import './Nav.css'

const Navigation = () => {
    return (
        <div className="topnav">
        <a className="active" href="#home">
            Home
        </a>
        <input type="text" placeholder="Search.."></input>
        <a href="#basket">
            Basket
        </a>
        <a href="#Sign-up">
            Sign up
        </a>      
        
        

      </div>

    
    );
}
 
export default Navigation;