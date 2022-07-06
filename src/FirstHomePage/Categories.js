import React from "react";
import { FaArrowRight, FaBreadSlice, FaTablets, FaToiletPaper } from "react-icons/fa";
import { GiMilkCarton, GiSodaCan, GiMeat, GiFruitBowl, GiBroccoli } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Categories = () => {
    const navigate = useNavigate();
    return(
        <>
        <section className="categorysection">
        <div className="categorytitle">
        <h2 className="title">Browse a popular category</h2>
        <p className="shopping">Start Shopping <button className="shoppingbutton" onClick={() => {navigate('shopping', {replace:true})}}><FaArrowRight /></button> </p>
        </div>
        <div className="categorycontainer1">
            
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
            <h3>Dairy</h3>
                <Link to="/pathLink#dairy">
                <div className="categoryicon"><GiMilkCarton /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Drink</h3>
                <Link to="/pathLink#drinks">
                <div className="categoryicon"><GiSodaCan /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Bakery</h3>
                <Link to="/pathLink#bakery">
                <div className="categoryicon"><FaBreadSlice /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Toiletries</h3>
                <Link to="/pathLink#toiletries">
                <div className="categoryicon"><FaToiletPaper /></div>
                </Link>
            </div>
            </div>
            <div className="categorycontainer2">
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Wellbeing</h3>
                <Link to="/pathLink#wellbeing">
                <div className="categoryicon"><FaTablets /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Meat</h3>
                <Link to="/pathLink#meats">
                <div className="categoryicon"><GiMeat /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Vegetable</h3>
                <Link to="/pathLink#vegetables">
                <div className="categoryicon"><GiBroccoli /></div>
                </Link>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}> 
                <h3>Fruit</h3>
                <Link to="/pathLink#fruits">
                <div className="categoryicon"><GiFruitBowl /></div>
                </Link>
            </div>
            </div>
            </section>
        </>
    );
}

export default Categories;