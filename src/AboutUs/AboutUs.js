import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import './AboutUs.css'
const AboutUs = () => {
    const navigate = useNavigate;
    return(
        <>
        <div className="about" >
            <div className="aboutus">
        <h1 className="aboutustitle">About Us</h1>
        </div>
        <div className="aboutpage">
        <h2 className="abouttitle">We'll keep this quick!</h2>
        <h3>What is GoMart?</h3>
        <p>GoMart will deliver all of your groceries right at your door! 
        We have a variety of products on offer in different locations.
        So when you order, your items will come directly to you.</p>
        <h3>How much is GoMart?</h3>
        <p>Delivery fees range from £1.00 to £2.00 depending on your area.</p>
        <h3>How late does GoMart deliver?</h3>
        <p>The stores will have different closing times so do check their
            info out!
        </p>
        <h3>How can I stay in touch?</h3>
        <p>Check back soon because we are always adding new products! 
            In the meantime, follow us on Facebook, Instagram, Twitter, LinkedIn and YouTube, become a member of the community</p>
        </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    );
}

export default AboutUs;