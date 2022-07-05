import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import './ItemCard.css'
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
    const [filteredItems, setFilteredItems] = useState();
    const [basketItem, setBasketItem] = useState([]);
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

    
    function AddToCart(input) {
        const purchasingItem = items.find(item => item.id === input);
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
                <ItemList props={bakeryItem} propsTitle={bakeryTitle}/> 
                <ItemList props={dairyItem} propsTitle={dairyTitle}/>
                <ItemList props={drinksItem} propsTitle={drinksTitle}/>
                <ItemList props={fruitsItem} propsTitle={fruitsTitle}/>
                <ItemList props={vegeItem} propsTitle={vegeTitle}/>
                <ItemList props={meatItem} propsTitle={meatTitle}/>
                <ItemList props={toiletriesItem} propsTitle={toiletriesTitle}/>
                <ItemList props={wellbeingItem} propsTitle={wellbeingTitle}/>
            </div>
            <Footer />
        </>

    )
}


