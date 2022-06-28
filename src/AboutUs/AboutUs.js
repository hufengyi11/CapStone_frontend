import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const AboutUs = () => {
    const navigate = useNavigate;
    return(
        <>
        <h1>About Us</h1>
        <h2>We'll keep this quick!</h2>
        <h2>What is GoMart?</h2>
        <p>GoMart will deliver all of your groceries right at your door! 
        We have a variety of products on offer in different locations.
        So when you order, your items will come directly to you.</p>
        <h2>How much is GoMart?</h2>
        <p>Delivery fees range from £1.00 to £2.00 depending on your area.</p>
        <h2>How late does GoMart deliver?</h2>
        <p>The stores will have different closing times so do check their
            info out!
        </p>
        <h2>How did GoMart start?</h2>
        <p></p>

        <div>
            <Footer />
        </div>
        </>
    );
}

export default AboutUs;