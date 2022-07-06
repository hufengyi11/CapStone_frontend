import React, { useContext } from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import BasketContext from '../BasketContext/BasketContext';

function Basket() {
    const { basketItems, setBasketItems } = useContext(BasketContext);

    const BasketItemCard = ({ name, price, RemoveFromBasket }) => {
        return (
            <div className='BasketItemCard'>
                <h3>{name}</h3>
                <h3>£{price}</h3>
                <button className='removebutton' onClick={() => RemoveFromBasket(name)}>X</button>
            </div>
        )
    }
    const BasketList = ({ RemoveFromBasket }) => {
        let mappedBasketItem = basketItems.map(item => {
            return (
                <BasketItemCard
                    name={item.name}
                    price={item.price}
                    RemoveFromBasket={RemoveFromBasket}
                    key={item.id}
                />
            )
        })
        return (
            <div className='BasketItemList'>{mappedBasketItem}</div>
        )
    }

    function RemoveFromCart(input) {
        const cartItems = basketItems.slice().filter((a) => a.name !== input);
        setBasketItems(cartItems)
    }

    return (
        <div>
            <Layout />
            <div className='BasketContainer'>
                <h1>Basket</h1>
                <p>You have {basketItems.length} items in the basket.</p>
            </div>
            <BasketList RemoveFromBasket={RemoveFromCart}/>
            <div className='padding'></div>

            <Footer />
        </div>
    )
}

export default Basket