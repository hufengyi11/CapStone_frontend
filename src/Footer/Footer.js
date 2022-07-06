import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import './Footer.css'
import { Link, useNavigate } from "react-router-dom";
import { GB } from 'country-flag-icons/react/3x2'


const Footer = () => {
const navigate = useNavigate();

    return (
        
        <footer className="footer">
             <div className="gomartfooter">
            <h1>GoMart</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="footer-col" >
                        <h4>Company</h4>
                        <ul>
                        <Link className="links" to="/aboutus" >
                            <li><a href="aboutus" onClick={() => {navigate('aboutus', {replace:true})}}>About us</a></li>
                            </Link>
                            <Link className="links" to="/faqs" >
                            <li><a href="faqs" onClick={() => {navigate('faqs', {replace:true})}}>FAQs</a></li>
                            </Link>
                            <li><a href="JoinUs">Careers</a></li>
                        </ul>
                    </ div>

                    <div className="footer-col">
                        <h4>Work with us</h4>
                        <ul>
                       <li> <a href="JoinUs">Become a Delivery Partner</a></li>
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Partner and Affiliate</a></li>
                        </ul>
                    </ div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                        <Link className="links" to="/contact" >
                       <li><a href="contact" onClick={() => {navigate('contact', {replace:true})}}> Contact Us</a></li>
                       </Link>
                        </ul>
                        
                        <h4>Language</h4>
                       <div className="flag">
                           <a className="flag"><GB/></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Vendor</h4>
                        <ul>
                            <li><a href="login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="privacy">
                
                <a>© 2022 GoMart, Inc.</a>
                <div className="privnotice"><a>Privacy Notice</a></div>
                <div className="terms"><a>Terms and Conditions</a></div>

            </div>
            <div className="socialmedia">
                        <div className="facebook"><a className="social" href="https://www.facebook.com/"><FaFacebook /></a></div>
                        <div className="twitter"><a className="social" href="https://www.twitter.com/"><FaTwitter /></a></div>
                        <div className="insta"><a className="social" href="https://www.instagram.com/"><FaInstagram /></a></div>
            </div>
        </footer>
    );

}

export default Footer;