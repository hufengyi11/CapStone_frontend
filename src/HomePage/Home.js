import React, { createContext, useEffect, useState } from 'react'
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
    const [basketItem, setBasketItem] = useState([]);

    const BasketItemCard = ({ name, price, RemoveFromBasket }) => {
        return (
            <div className='BasketItemCard'>
                <h3>{name}</h3>
                <h3>£{price}</h3>
                <button className='removebutton' onClick={() => RemoveFromBasket(name)}>X</button>
            </div>
        )
    }
    const BasketList = ({ items, RemoveFromBasket }) => {
        let mappedBasketItem = items.map(item => {
            return (
                <BasketItemCard
                    name={item.name}
                    price={item.price}
                    RemoveFromBasket={RemoveFromBasket}
                    key={items.length}
                />
            )
        })
        return (
            <div className='BasketItemList'>{mappedBasketItem}</div>
        )
    }

    function RemoveFromCart(input) {
        const cartItems = basketItem.slice().filter((a) => a.name !== input);
        setBasketItem(cartItems)
    }

    function AddToCart(input) {
        const purchasingItem = items.find(item => item.id === input);
        setBasketItem([...basketItem, purchasingItem])
    }

    // search function
    const [filteredItems, setFilteredItems] = useState();

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    return (
        <>
            <Layout />
            {items.length && <div className='ItemDisplay'>
                <div id="bakery"><ItemList items={bakeryItem} Title={bakeryTitle} AddToCart={AddToCart} /></div>
                <div id="dairy"><ItemList items={dairyItem} Title={dairyTitle} AddToCart={AddToCart} /></div>
                <div id="drinks"><ItemList items={drinksItem} Title={drinksTitle} AddToCart={AddToCart} /></div>
                <div id="fruits"><ItemList items={fruitsItem} Title={fruitsTitle} AddToCart={AddToCart} /></div>
                <div id="vegetables"><ItemList items={vegeItem} Title={vegeTitle} AddToCart={AddToCart} /></div>
                <div id="meats"><ItemList items={meatItem} Title={meatTitle} AddToCart={AddToCart} /></div>
                <div id="toiletries"><ItemList items={toiletriesItem} Title={toiletriesTitle} AddToCart={AddToCart} /></div>
                <div id="wellbeing"><ItemList items={wellbeingItem} Title={wellbeingTitle} AddToCart={AddToCart} /></div>
            </div>}
            <Footer />
        </>

    )
}


