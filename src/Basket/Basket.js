import React, { useState } from 'react'
import './Basket.css'
import Footer from "../Footer/Footer";

const Basket = () => {
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (item) => {

        setBasketItems([...basketItems, item])
    }

    return (
        <>
            <h1>Your Basket</h1>

            <ul>
                {basketItems}
            </ul>

            <Footer />
        </>
    );
}
export default Basket;