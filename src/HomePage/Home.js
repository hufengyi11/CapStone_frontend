import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
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

    const ItemCard = ({ id, name, price, rating, imageUrl, handelAddToCard }) => {
        return (
            <div className='itemcontainerwithcart'>
                <div className='itemcontainer'>
                    <img className='cocacola' src={`${imageUrl}`} />
                </div>
                <h2 className='itemtitle'>{name}</h2>
                <p>£{price}</p>
                <p>{rating} star</p>
                <button className='AddtocartButton' onClick={() => handelAddToCard(id)}>+</button>
            </div>
        )
    }

    const ItemList = ({ items, handelAddToCard }) => {
        let mappedshoppingItem = items.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                    id={item.id}
                    handelAddToCard={handelAddToCard}
                />
            )
        })

        return (
            <div className='ItemListContainer'>
                <div className='ItemCardContainer'>{mappedshoppingItem}</div>
            </div>
        )
    }

    const BasketItemCard = ({ name, price }) => {
        return (
            <div className='BasketItemCard'>
                <h3>{name}</h3>
                <h3>£{price}</h3>
            </div>
        )
    }

    const BasketList = ({ items }) => {
        let mappedBasketItem = items.map(item => {
            return (
                <BasketItemCard
                    name={item.name}
                    price={item.price}
                />
            )
        })
        return(
            <div className='BasketItemList'>{mappedBasketItem}</div>
        )
    }

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
            <Layout searchFunction={searchFunction} />
            <div className='BasketContainer'>
                <h2>Basket</h2>
                <BasketList items={basketItem} />
            </div>
            <hr />
            <div className='ItemDisplay'>
                <ItemList items={filteredItems ? filteredItems : items} handelAddToCard={AddToCart} />
            </div>
            <Footer />
        </>

    )



}
