import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'
import { FaShoppingBasket, FaBars } from 'react-icons/fa';

const Navigation = () => {
    return (
        <>
            <nav className="topnav" id="myTopnav">
            <img className="logo" src={require('../Images/gomartlogo.png')} alt="image"/>
                <ul>
                    <Link to="/" className="active">Home</Link>
                    <Link to="/news">Happy hour?</Link>
                    <Link to="/userlogin" className='split'>
                        Log In
                    </Link>
                    <Link to="/basket" className='split'>Basket<FaShoppingBasket />
                    </Link>
                    <input type="text" placeholder="Search.."></input>
                    {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()"> <FaBars /></a> */}
                </ul>
            </nav>
            <Outlet />
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