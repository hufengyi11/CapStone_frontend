import React from "react";
import './FirstHomePage.css';
import { Button } from "@material-ui/core";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Carousel, { CarouselItem } from "./Carousel/Carousel";
import Geolocation from "./Geolocation";


const EnterAdress = () => {
    const location = Geolocation();
    const navigate = useNavigate();
    return(
        <>
        <div className="gomartsection">
        <h1 className="webtitle">GoMart</h1>
        <img className="shoppingcart" src={require("../Images/shoppingcart.gif")} />
        </div>
        <div className="flexbox-container">
            <div className="flexbox-item-1">
            <h1 className="delivery">Daily groceries delivered to you in minutes.</h1>
            
            <input className="input" type="text" placeholder="Enter delivery address" onClick={()=>{
                   console.log(location.loaded ? JSON.stringify(location): "location data not available yet.")
                }}>
                
                </input>
                
            <button type="submit" className="arrowbutton" onClick={() => {navigate('shopping', {replace:true})}}>
                <div className="arrow"><FaArrowRight /></div>
                </button>
            </div>
            
                
            <div className="imagecontainer">
                
            <div className="flexbox-item-2">
                <Carousel>
                <CarouselItem>
                <img src={require("../Images/bread.webp")}  alt="bread" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("../Images/milk.jpeg")}  alt="milk" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("../Images/egss.webp")}  alt="eggs" width="700px" height="400px"/>
                </CarouselItem>
            </Carousel>
            </div>
            <div className="flexbox-item-3">
            <Carousel>
                <CarouselItem>
                <img className="images" src={require("../Images/cleaning.jpeg")}  alt="cleaning" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img className="images" src={require("../Images/toothpaste.jpeg")}  alt="toothpaste" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img className="images" src={require("../Images/fruits.jpeg")}  alt="fruits" width="700px" height="400px"/>
                </CarouselItem>
            </Carousel>

            </div>
            </div>
        </div>
        </>
    );
}

export default EnterAdress;