import React, { createContext, useEffect, useState } from 'react'
import { BasketContext, CartProvider } from '../Basket/BasketContext';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import './Home.css'
import ItemList from './ItemList';

export default function Home() {
    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    const [items, setItems] = useState([]);
    const bakeryItem = items.filter(i => i.category === 'Bakery');
    const dairyItem = items.filter(i => i.category === 'Dairy');
    const drinksItem = items.filter(i => i.category === 'Drink');
    const fruitsItem = items.filter(i => i.category === 'Fruit');
    const vegeItem = items.filter(i => i.category === 'Vegetable');
    const meatItem = items.filter(i => i.category === 'Meat');
    const toiletriesItem = items.filter(i => i.category === 'Toiletries');
    const wellbeingItem = items.filter(i => i.category === 'WellBeing');
    const bakeryTitle = 'Bakery';
    const dairyTitle = 'Dairy';
    const drinksTitle = 'Drinks';
    const fruitsTitle = 'Fruits';
    const vegeTitle = 'Vegetables';
    const meatTitle = 'Meat';
    const toiletriesTitle = 'Toiletries';
    const wellbeingTitle = 'Well Being';


    //basket
    const Context = createContext('Default Value');
    const [basketItem, setBasketItem] = useState({});

    // const BasketList = ({ items, RemoveFromBasket }) => {
    //     let mappedBasketItem = items.map(item => {
    //         return (
    //             <BasketItemCard
    //                 name={item.name}
    //                 price={item.price}
    //                 RemoveFromBasket={RemoveFromBasket}
    //                 key={items.length}
    //             />
    //         )
    //     })
    //     return (
    //         <div className='BasketItemList'>{mappedBasketItem}</div>
    //     )
    // }

    // const BasketItemCard = ({ name, price, RemoveFromBasket }) => {
    //     return (
    //         <div className='BasketItemCard'>
    //             <h3>{name}</h3>
    //             <h3>£{price}</h3>
    //             <button className='removebutton' onClick={() => RemoveFromBasket(name)}>X</button>
    //         </div>
    //     )
    // }

    // function RemoveFromCart(input) {
    //     // find how many of the input is there
    //     const count = basketItem.filter(a => a.id)
    //     const cartItems = basketItem.slice().filter((a) => a.name !== input);
    //     setBasketItem(cartItems)
    // }



    // search function
    const [filteredItems, setFilteredItems] = useState();

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    return (
        <>
            <Layout />
            {/* <div className='BasketContainer'>
            <h1>Basket</h1>
            <h2>You have {basketItem.length} items in the basket.</h2>
            <BasketList items={basketItem} RemoveFromBasket={RemoveFromCart} />
            </div>
            <hr /> */}
            <CartProvider value={[basketItem, setBasketItem]}>
                {items.length && <div className='ItemDisplay'>
                    <ItemList items={bakeryItem} Title={bakeryTitle} />
                    <ItemList items={dairyItem} Title={dairyTitle} />
                    <ItemList items={drinksItem} Title={drinksTitle} />
                    <ItemList items={fruitsItem} Title={fruitsTitle} />
                    <ItemList items={vegeItem} Title={vegeTitle} />
                    <ItemList items={meatItem} Title={meatTitle} />
                    <ItemList items={toiletriesItem} Title={toiletriesTitle} />
                    <ItemList items={wellbeingItem} Title={wellbeingTitle} />
                </div>}
            </CartProvider>
            <Footer />
        </>

    )
}


