import React, { useContext } from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'
import { CartContext } from './BasketContext';

function Basket() {

    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    return (
        <div>
            <Layout />
            <div className='BasketContainer'>
                <h2>Your basket</h2>
                <span>items in cart : {cart.length}</span>
                <br />
                <span>total price : {totalPrice}</span>
            </div>
            <div className='padding'></div>

            <Footer />
        </div>
    )
}

export default Basket