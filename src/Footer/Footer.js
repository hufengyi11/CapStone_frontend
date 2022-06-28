import React from "react";
import { IconName } from "react-icons/ai";
import ReactDOM from 'react-dom';


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
                        <li><a className="facebook"href="#">Facebook</a></li>
  	 				        <li><a href="#"><FaTwitter /></a></li>
  	 				        <li><a href="#">Instagram</a></li>
                    </ div>

                    <div className="footer-col">
                        <h4>Help and Support</h4>
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