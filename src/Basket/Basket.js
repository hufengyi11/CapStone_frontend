import React, { useContext } from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import BasketContext from '../BasketContext/BasketContext';
import './Basket.css'
import e from 'cors';

function Basket() {
    const { basketItems, setBasketItems } = useContext(BasketContext);

    function Add(id) {
        const purchasingItem = basketItems.find(item => item.id == id);
        setBasketItems([...basketItems, purchasingItem])
    }

    function Remove(id) {
        const listWithid = basketItems.filter(item => item.id === id)
        const listWithoutid = basketItems.filter(item => item.id != id)
        listWithid.shift();
        const newList = listWithoutid.concat(listWithid)
        setBasketItems(newList)

    }

    const uniqueNames = basketItems.map(item => item.id)
        .filter((value, index, self) => self.indexOf(value) === index)
        .map(id =>
            <div className='basketListContainer'>
                <div className='basketListItem'>
                    <h3>{basketItems.filter(p => p.id === id)[0].name}</h3>
                    <h4>price: £{basketItems.filter(p => p.id === id)[0].price}</h4>
                </div>
                <h4 className='basketListItemCount'>
                    <button className='button' onClick={() => Remove(id)}>-</button>

                    amount: {basketItems.filter(p => p.id === id).length}

                    <button className='button' onClick={() => Add(id)}>+</button>
                </h4>
            </div>
        )

    const priceList = basketItems.map(k => k.price)
    let orderValue = priceList.reduce((a, b) => a + b, 0)
    const totalValue = orderValue + 2




    return (
        <div>
            <Layout />
            <h1 className='title'>Shopping Bag</h1>

            <div className='BasketContainer'>
                {uniqueNames}
                <div className='orders'>
                <h3>Order Value: £{orderValue}</h3>
                <h3>Delivery Cost: £2</h3>
                <h2>Total: £{totalValue}</h2>
                <Link to="/checkout"><button id="but" > Checkout</button></Link>
                </div>
            </div>

            <div className='padding'></div>
            <Footer />
        </div>
    )
}

export default Basket