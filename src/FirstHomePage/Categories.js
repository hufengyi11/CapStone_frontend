import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="categorytitle">
        <h2 className="title">Browse a popular category</h2>
        <p className="shopping">Start Shopping <button className="shoppingbutton" onClick={() => {navigate('shopping', {replace:true})}}><FaArrowRight /></button> </p>
        </div>
        <div>
            
        </div>
        </>
    );
}

export default Categories;