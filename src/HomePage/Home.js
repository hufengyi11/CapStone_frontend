import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import ItemCard from './ItemCard';
import './ItemCard.css'

export default function Home() {

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    const ItemList = ({items}) => {
        let mappedItem = items.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                    key={item.id}
                />
            )
        })

        return (
            <div className='ItemListContainer'>
                
                <div className='ItemCardContainer'>{mappedItem}</div>
            </div>
        )
    }

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    return (
        <>
            <Layout searchFunction={searchFunction} />
            <div className='ItemDisplay'>
                <ItemList items={filteredItems ? filteredItems : items} />
            </div>
            <Footer />
        </>

    )
}
