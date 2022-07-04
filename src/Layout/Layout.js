import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css'
import { FaShoppingBasket, FaBars, FaSun } from 'react-icons/fa';

const Navigation = ({ searchFunction }) => {

  const [searchInput, setSearchInput] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    searchFunction(searchInput);
  }

  function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
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
            <img className="logo" src={require('../Images/gomartlogo.png')} alt="image" /></Link>
          <Link to="/" className="active">
            Home
          </Link>

          <Link to='/shopping' className='best-seller'>Shopping</Link>

          <Link to="/best-seller" className='best-seller'>Best Sellers</Link>

          <Link to="/Stores" className='Stores'>Our Stores</Link>

          <Link to="/login" className='split'>Log In</Link>
          <Link to="/register" className='split'>Register</Link>
          <Link to="/basket" className='split'>Basket<FaShoppingBasket /></Link>
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder="Search GoMart"
              className='texts'
              onChange={e => setSearchInput(e.target.value)}
            ></input>
          </form>
          <a href="javascript:void(0);" className="icon" onClick={myFunction()}><FaBars /></a>
          <button className="darkbutton" onClick={() => setDarkMode(!darkMode)}>
            <FaSun /></button>
        </ul>
      </nav>
      <Outlet />
    </>
  );

}

export default Navigation;