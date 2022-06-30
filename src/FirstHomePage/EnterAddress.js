import React from "react";
import './FirstHomePage.css';
import { Button } from "@material-ui/core";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const EnterAdress = () => {

    const navigate = useNavigate();
    return(
        <>
        
        <div className="flexbox-container">
            <div className="flexbox-item-1">
            <h1 className="delivery">Daily groceries delivered to you in minutes.</h1>
            
            <input className="input" type="text" placeholder="Enter delivery address"></input>
            <Button><button type="submit" className="button" onClick={() => {navigate('shopping', {replace:true})}}><FaArrowRight /></button>
            </Button>
            </div>
            
                
            <div className="imagecontainer">
            <div className="flexbox-item-2">image carousel</div>
            <div className="flexbox-item-3">image carousel</div>
            </div>
        </div>
        </>
    );
}

export default EnterAdress;