import React from "react";
import Footer from "../Footer/Footer";
import './Faqs.css'

const Faqs= () =>{
    
    return(
        <>
            <h1>GoMart FAQs</h1>

                <button className="accordion"> <h2> What is GoMart?</h2></button>
                <div className="panel"> 
                    <p> 
                        Groceries delivered to your doorstep within minutes
                    </p>
                </div>

            <button className="accordion">How much does GoMart cost?</button>
            <div className="panel">
                    <p>
                        Delivery fees range from £1.00 to £2.00 depending on your area.
                    </p>
            </div>

                <button className="accordion">What is the minimum payment</button>
                <div className="panel">
                    <p>
                        Our minimum order value can range from £3 to £5 depending on the store.
                    </p>
                </div>


                <button className="accordion">How late does GoMart deliver?</button>
                <div className="panel">
                    <p>
                        The stores will have different closing times so do check their
                        info out!
                    </p>
                </div>
            
                <button className="accordion">Can I pay by cash?</button>
                <div className="panel">
                    <p>
                        Due to COVID-19, we currently do not accept cash payments in order to offer
                        contactless delivery.
                    </p>
                </div>

                <button className="accordion">Where can I write a review?</button>
                <div className="panel">
                    <p>
                        If you would like to let us know how we're doing, follow the link on the bottom
                        of the page under 'Support'.
                    </p>
                </div>

                <button className="accordion">My order was cancelled but I still see a charge on my account. What happens?</button>
                <div className="panel"> 
                    <p>
                        Orders usually take 3 to 5 business days to clear the account, so expect a full 
                        refund by that time.
                    </p>
                </div>
            <Footer />        
        </>
    );
} 

export default Faqs;