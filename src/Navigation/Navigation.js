import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import './Nav.css'
import { FaShoppingBasket,  FaBars } from 'react-icons/fa';

const Navigation = () => {
    return (
        <>
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">
                Home
            </a>
            <a href="#news">
                Happy hour?
            </a>
            <a href="#sign-up" className='split'>
                Log In
            </a> 
            <a href="#basket" className='split'>Basket<FaShoppingBasket />
                </a>
                <input type = "text" placeholder="Search.."></input> 
                <a href="javascript:void(0);" className="icon" onclick="myFunction()"> <FaBars/>
            </a>
        </div>

    </>
    );
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
}
 
export default Navigation;