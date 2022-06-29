import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
    return(
        <>
        <div>
        <h2>Browse a popular category</h2>
        <p>Start Shopping <button onClick={() => {navigate('shopping', {replace:true})}}><FaArrowRight /></button> </p>
        </div>
        </>
    );
}

export default Categories;