import React from "react";
import { FaBeer, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import './Footer.css'

const Footer = () => {


    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col" >
                        <h4>GoMart</h4>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Copyright</a></li>
                        </ul>
                    </ div>

                    <div className="footer-col">
                        <h4>Socials</h4>
                        <div><a className="social" href="#"><FaFacebook /></a></div>
                        <div><a className="social" href="#"><FaTwitter /></a></div>
                        <div><a className="social" href="#"><FaInstagram /></a></div>
                    </ div>

                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Complaints</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Vendor</h4>
                        <ul>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );

}

export default Footer;