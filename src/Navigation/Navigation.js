import React from 'react';
import {Route, Routes, Link, BrowserRouter} from "react-router-dom"
import './Nav.css'

const Navigation = () => {
    return (
        <>
        <div className="topnav">
        <a className="active" href="#home">
            Home
        </a>
        <a href="#Sign-up">
            Sign up
        </a>
        <a href="#basket">
            Basket
        </a></div>
         <input type="text" placeholder="Search..">
         </input>

      
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
    </>
    );

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
}
 
export default Navigation;