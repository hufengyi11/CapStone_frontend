import e from 'cors';
import React, { createContext, useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import './Home.css'
import ItemCard from './ItemCard';
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

    // search function
    const [filteredItems, setFilteredItems] = useState(null);

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    const SearchComponent = () => {
       if(filteredItems){
        if (filteredItems.length > 0) {
            return (
                <ItemList items={filteredItems} />
            )
        } else  {
            return(
                <span>The item doesn't exist</span>
            )
        }
       }
    }

    return (
        <>
            <Layout searchFunction={searchFunction} />
            <div className='ItemDisplay'>
                <SearchComponent />
            </div>
            {items.length && <div className='ItemDisplay'>
                <div id="bakery"><ItemList items={bakeryItem} Title={bakeryTitle} /></div>
                <div id="dairy"><ItemList items={dairyItem} Title={dairyTitle} /></div>
                <div id="drinks"><ItemList items={drinksItem} Title={drinksTitle} /></div>
                <div id="fruits"><ItemList items={fruitsItem} Title={fruitsTitle} /></div>
                <div id="vegetables"><ItemList items={vegeItem} Title={vegeTitle} /></div>
                <div id="meats"><ItemList items={meatItem} Title={meatTitle} /></div>
                <div id="toiletries"><ItemList items={toiletriesItem} Title={toiletriesTitle} /></div>
                <div id="wellbeing"><ItemList items={wellbeingItem} Title={wellbeingTitle} /></div>
            </div>}
            <Footer />


        </>

    )
}


