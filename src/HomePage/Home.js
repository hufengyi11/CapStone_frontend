import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import Category from './Category';
import Bakery from './Category/Bakery';
import Dairy from './Category/Dairy';
import Drinks from './Category/Drinks';
import Fruits from './Category/Fruits';
import Meat from './Category/Meat';
import Toiletries from './Category/Toiletries';
import Vegetable from './Category/Vegetable';
import Wellbeing from './Category/Wellbeing';
import './ItemCard.css'

export default function Home() {
    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState();
    const [basketItem, setBasketItem] = useState([]);
    const bakeryItem = items.filter(i => i.category == 'Bakery');
    const dairyItem = items.filter(i => i.category == 'Dairy');
    const drinksItem = items.filter(i => i.category == 'Drink');
    const fruitsItem = items.filter(i => i.category == 'Fruit');
    const vegeItem = items.filter(i => i.category == 'Vegetable');
    const meatItem = items.filter(i => i.category == 'Meat');
    const toiletriesItem = items.filter(i => i.category == 'Toiletries');
    const wellbeingItem = items.filter(i => i.category == 'WellBeing');
    
    function AddToCart(input) {
        const purchasingItem = items.find(item => item.id == input);
        setBasketItem([...basketItem,purchasingItem])
    }

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    return (
        <>
            <Layout />
            <div className='ItemDisplay'>
                <Category props={bakeryItem}/> 
                <Category props={dairyItem}/>
                <Category props={drinksItem}/>
                <Category props={fruitsItem}/>
                <Category props={vegeItem}/>
                <Category props={meatItem}/>
                <Category props={toiletriesItem}/>
                <Category props={wellbeingItem}/>
            </div>
            <Footer />
        </>

    )
}


