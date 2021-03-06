import React, { useContext } from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Navigation/Navigation'
import { Link } from "react-router-dom";
import BasketContext from '../BasketContext/BasketContext';
import './Basket.css'

function Basket() {
    const { basketItems, setBasketItems } = useContext(BasketContext);

    function Add(id) {
        const purchasingItem = basketItems.find(item => item.id === id);
        setBasketItems([...basketItems, purchasingItem])
    }

    function Remove(id) {
        const listWithid = basketItems.filter(item => item.id === id)
        const listWithoutid = basketItems.filter(item => item.id !== id)
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

    const Checkout = () => {
        if (basketItems.length > 0) {
            return (
                <Link to="/checkout"><button id="but" > Checkout</button></Link>
            )
        }
    }


    return (
        <div>
            <Layout />
            

            <div className='BasketContainer'>
            <h1 className='title'>Shopping Basket</h1>
                {uniqueNames}
                <div className='orders'>
                    <h3>Order Value: £{orderValue}</h3>
                    <h3>Delivery Cost: £2</h3>
                    <h2>Total: £{totalValue}</h2>
                    {/* checkout only when basketItems.length > 0 */}
                    <Checkout />
                </div>
            </div>

            <div className='padding'></div>
            <Footer />
        </div>
    )
}

export default Basket