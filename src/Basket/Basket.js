import React, { useState } from 'react'
import './Basket.css'
import Footer from "../Footer/Footer";
import Layout from "../Layout/Layout"

const Basket = (item) => {
    const [basketItems, setBasketItems] = useState([]);

    const addToBasket = (item) => {
        console.log(item)
        setBasketItems([...basketItems, item])
    }

    return (
        <>
        <Layout />
            <h1>Your Basket</h1>

            <ul>
                {basketItems}
            </ul>

            <Footer />
        </>
    );
}
export default Basket;