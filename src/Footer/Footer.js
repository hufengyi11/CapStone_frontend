import React from "react";
import { FaBeer, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import './Footer.css'
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col" >
                        <h4>GoMart</h4>
                        <ul>
                        <Link className="links" to="/aboutus" >
                            <li><a href="aboutus" onClick={() => {navigate('aboutus', {replace:true})}}>About us</a></li>
                            </Link>
                            <Link className="links" to="/faqs" >
                            <li><a href="faqs" onClick={() => {navigate('faqs', {replace:true})}}>FAQs</a></li>
                            </Link>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </ div>

                    <div className="footer-col">
                        <h4>Socials</h4>
                        <div><a className="social" href="https://www.facebook.com/"><FaFacebook /></a></div>
                        <div><a className="social" href="https://www.twitter.com/"><FaTwitter /></a></div>
                        <div><a className="social" href="https://www.instagram.com/"><FaInstagram /></a></div>
                    </ div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                        <Link className="links" to="/contact" >
                       <li><a href="contact" onClick={() => {navigate('contact', {replace:true})}}> Contact Us</a></li>
                       </Link>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Vendor</h4>
                        <ul>
                            <li><a href="login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;