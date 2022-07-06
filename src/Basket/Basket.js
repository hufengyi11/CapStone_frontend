import React from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Basket() {
    const navigate = useNavigate;
    const [basketItem, setBasketItem] = useState([]);
    return (
        <div>
            <Layout />
            {/* <div className='BasketContainer'>
            
            <BasketList items={basketItem} RemoveFromBasket={RemoveFromCart} />
            </div> */}
            <div className='BasketContainer'>
            <h1>Basket</h1>
            <p>You have {basketItem.length} items in the basket.</p>
                <h2>Your basket</h2>
                <p>Item in cart: 0</p>
                <p>Total price: 0</p>
            </div>
            <div className='padding'></div>

            <Footer />
        </div>
    )
}

export default Basket