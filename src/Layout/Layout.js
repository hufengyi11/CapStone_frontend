import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'
import { FaShoppingBasket, FaBars, FaSun } from 'react-icons/fa';

const Navigation = () => {
  
  function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    const [darkMode, setDarkMode] = React.useState(false);

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
            <nav className="topnav" id="myTopnav">
            
                <ul>
                <Link to="/" className="active2">
                    <img className="logo" src={require('../Images/gomartlogo.png')} alt="image"/></Link>

                    <Link to="/" className="active">
                        Home</Link>
                    <Link to="/">
                        Happy hour?
                    </Link>
                    
                    <Link to="/login" className='split'>
                        Log In
                    </Link> 
                    <Link to="/register" className='split'>
                        Register
                    </Link>
                    <Link to="/basket" className='split'>
                        Basket
                    <FaShoppingBasket />
                    </Link>
                    <input type="text" placeholder="Search.."></input>
                    
                    <a href="javascript:void(0);" className="icon" onclick="myFunction()"> <FaBars /></a>   
                    
                    <button onClick={() => setDarkMode(!darkMode)}> 
                    <FaSun/></button>
                </ul>
            </nav>
            <Outlet />
        </>
    );
    
}

export default Navigation;