import React, { useContext } from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import BasketContext from '../BasketContext/BasketContext';
import './Basket.css'
import { Remove } from '@material-ui/icons';

function Basket() {
    const { basketItems, setBasketItems } = useContext(BasketContext);

    const uniqueNames = basketItems.map(item => item.id)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map(i =>
            <div className='basketListContainer'>
                <div className='basketListItem'>
                    <h3>{basketItems.filter(p => p.id == i)[0].name}</h3>
                    <h4>price: £{basketItems.filter(p => p.id == i)[0].price}</h4>
                </div>
                <h4 className='basketListItemCount'>

                    {/* <button className='button' >-</button> */}

                    amount: {basketItems.filter(p => p.id == i).length}

                    {/* <button className='button' onClick={Add(i)}>+</button> */}
                </h4>
            </div>
        )

    const priceList = basketItems.map(k => k.price)
    let orderValue = priceList.reduce((a, b) => a + b, 0)
    const totalValue = orderValue + 2



    // function RemoveFromCart(input) {
    //     const cartItems = basketItems.slice().filter((a) => a.name !== input);
    //     setBasketItems(cartItems)
    // }

    return (
        <div>
            <Layout />
            <h1 className='title'>Shopping Bag</h1>

            <div className='BasketContainer'>
                {uniqueNames}
                <h3>Order Value: £{orderValue}</h3>
                <h3>Delivery Cost: £2</h3>
                <h2>Total: £{totalValue}</h2>
            </div>

            <div className='padding'></div>
            <Footer />
        </div>
    )
}

export default Basket