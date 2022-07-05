import React from "react";
import { FaArrowRight, FaBreadSlice, FaTablets, FaToiletPaper } from "react-icons/fa";
import { GiMilkCarton, GiSodaCan, GiMeat, GiFruitBowl, GiBroccoli } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

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
                <div className="categoryicon"><GiMilkCarton /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Drink</h3>
                <div className="categoryicon"><GiSodaCan /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Bakery</h3>
                <div className="categoryicon"><FaBreadSlice /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Toiletries</h3>
                <div className="categoryicon"><FaToiletPaper /></div>
            </div>
            </div>
            <div className="categorycontainer2">
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Wellbeing</h3>
                <div className="categoryicon"><FaTablets /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Meat</h3>
                <div className="categoryicon"><GiMeat /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}>
                <h3>Vegetable</h3>
                <div className="categoryicon"><GiBroccoli /></div>
            </div>
            <div className="category" onClick={() => {navigate('shopping', {replace:true})}}> 
                <h3>Fruit</h3>
                <div className="categoryicon"><GiFruitBowl /></div>
            </div>
            </div>
            </section>
        </>
    );
}

export default Categories;