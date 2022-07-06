import React from "react";
import App from "./CurrentTime";
import CurrentTime from "./CurrentTime";
import Layout from '../Layout/Layout'
import { useContext } from "react";
import BasketContext from '../BasketContext/BasketContext';
import Footer from "../Footer/Footer";

const CheckoutPage = () => {
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
    return(
        <>
        <Layout />
        <div className="checkoutwrapper">
        <div className="checkout">
        <h1 className="maintitle">Checkout</h1>
        <h2>Your order has been confirmed!</h2>
        </div>
        <div className="estimatedelivery">
        <h2 className="checkouttitle">Estimated arrival</h2>
        <h3 className="timetitle"><App /></h3>
        <p>Your order is being prepared</p>
        <img className="deliveryimg" src={require("../Images/delivery.gif")} />
        </div>
        <div>
            <h1 className="orderdetails">Order Details</h1>
        <p className="orderitems">{uniqueNames}</p>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default CheckoutPage;