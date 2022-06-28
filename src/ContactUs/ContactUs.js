import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate;
    return(

        <>
        <h3>Contact Us</h3>
      <p>If you have any enquiries or issues, please do not hesitate to drop a message below!</p>
            <form className="form">
                <label className="formName">Name:</label>
                <input 
                    type="name" 
                    id="name" 
                    placeholder="E.g. Mohamed Ismail"
                />
                <label className="formEmail">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="E.g. mohamedismail@email.co.uk"
                 />
                <label className="formEnquiry">Enquiry:</label>
                <input 
                    id="enquiry"
                    placeholder="Please describe your issue to us..."
                >
                    </input> 

                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default ContactUs;