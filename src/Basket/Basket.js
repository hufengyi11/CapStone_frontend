import React from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout/Layout'

function Basket() {
    return (
        <div>
            <Layout />
            <div className='BasketContainer'>
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