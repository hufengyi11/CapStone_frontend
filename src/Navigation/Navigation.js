import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import './Nav.css'

const Navigation = () => {
    return (
        <>
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">
                Home
            </a>
            <a href="#news">
                Happy hour?
            </a>
           
            <a href="#sign-up" className='splitt'>
                singup
            </a> 
            <a href="#basket" className='split'> 
                Basket 
            </a>
            <input type = "text" placeholder="Search.."></input> 
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa-regular fa-bars"></i>

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