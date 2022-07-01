import React from "react";
import { FaClock, FaShoppingBag, FaWpforms } from "react-icons/fa";

const Description = () => {
    return(
        <>
        <div className="descriptioncontainer">
        <div className="itemnumber">
            
            <h2 className="descriptionicons"><div><FaShoppingBag /></div>
                Plenty of items!</h2>
            <p>From cleaning supplies and over-the-counter medicine to food, drinks, electronics,
                 baby essentials and more.</p>
        </div>
        <div className="itemnumber">
            <h2 className="descriptionicons"><div><FaClock /></div>Fast Delivery!</h2>
            <p>From our stores to your door means that you get your order in as little as 15-20 minutes*.
                 We're open late to bring you what you need.</p>
        </div>
        <div className="itemnumber">
            <h2 className="descriptionicons"><div><FaWpforms /></div>Free delivery!</h2>
            <p>Join our community by signing up for unlimited free delivery on eligible orders</p>
        </div>
        </div>
        <p className="guarantee">*Not guaranteed; average delivery time.</p>
        </>
    );
}

export default Description;