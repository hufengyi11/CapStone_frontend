import React from "react";
import './FirstHomePage.css';
import { Button } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Carousel, { CarouselItem } from "./Carousel/Carousel";
import Geolocation from "./Geolocation";


const EnterAdress = () => {

    const navigate = useNavigate();
    return(
        <>
        
        <div className="flexbox-container">
            <div className="flexbox-item-1">
            <h1 className="delivery">Daily groceries delivered to you in minutes.</h1>
            
            <input className="input" type="text" placeholder="Enter delivery address">
                </input>
                
            <button type="submit" className="arrowbutton" onClick={() => {navigate('shopping', {replace:true})}}>
                <FaArrowRight />
                </button>
            </div>
            
                
            <div className="imagecontainer">
                
            <div className="flexbox-item-2">
                <Carousel>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/bread.webp")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/milk.jpeg")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/egss.webp")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
            </Carousel>
            </div>
            <div className="flexbox-item-3">
            <Carousel>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/cleaning.jpeg")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/toothpaste.jpeg")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
                <CarouselItem>
                <img src={require("/Users/mohamedismail/coursework/week_12/day_1/CapStone_frontend/src/Images/fruits.jpeg")}  alt="Minions" width="700px" height="400px"/>
                </CarouselItem>
            </Carousel>

            </div>
            </div>
        </div>
        </>
    );
}

export default EnterAdress;