import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
import './ItemCard.css'

export default function Home() {

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState();
    const [basketItem, setBasketItem] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    function ItemCard({ name, price, rating, id }) {
        return (
            <div className='itemcontainerwithcart'>
                <article className='itemcontainer'>
                    <p>image</p>
                </article>
                <h2 className='itemtitle'>{name}</h2>
                <p>£{price}</p>
                <p>{rating} star</p>
                <button id={id} className='Addtocart' onClick={handelAddToCard}>Add to Cart</button>
            </div>

        )
    }

    function handelAddToCard() {
        console.log('button clicked')
    }

    const ItemList = ({ items }) => {
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


        // function ItemDetail(item) {
    //     return (
    //         <>
    //             <h1>{item.name}</h1>
    //             <p>{item.price}</p>
    //             <p>{item.detail}</p>
    //             <p>{item.rating}</p>
    //             <p>{item.store_id}</p>
    //         </>

    //     )
    // }
}
