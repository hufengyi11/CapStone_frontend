import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout.js';
import axios from '../LogIn/api/axios';
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

    // useEffect(() => {
    //     axios.get('http://localhost:8080/items')
    //         .then(res => {
    //             const items = res.data;
    //             setItems(items);
    //         }).catch((err) => console.log(err));
    // }, [])

    // const [items, setItems] = useState([]);
    // const [filteredItems, setFilteredItems] = useState();
    // const [basketItem, setBasketItem] = useState([]);

    // const ItemCard = ({ id, name, price, rating, imagepath, handelAddToCard }) => {
    //     return (
    //         <div className='itemcontainerwithcart'>
    //             <div className='itemcontainer'>
    //                 <img className='itemimage' src={`${imagepath}.jpeg`}/>
    //             </div>
    //             <h2 className='itemtitle'>{name}</h2>
    //             <p>£{price}</p>
    //             <p>{rating} star</p>
    //             <button className='AddtocartButton' onClick={() => handelAddToCard(id)}>+</button>
    //         </div>
    //     )
    // }

    // const ItemList = ({ items, handelAddToCard }) => {
    //     let mappedshoppingItem = items.map(item => {
    //         return (
    //             <ItemCard
    //                 name={item.name}
    //                 price={item.price}
    //                 rating={item.rating}
    //                 key={item.id}
    //                 id={item.id}
    //                 imagepath={item.imagepath}
    //                 handelAddToCard={handelAddToCard}
    //             />
    //         )
    //     })

    //     return (
    //         <div className='ItemListContainer'>
    //             <div className='ItemCardContainer'>{mappedshoppingItem}</div>
    //         </div>
    //     )
    // }

    // const BasketItemCard = ({ name, price }) => {
    //     return (
    //         <div className='BasketItemCard'>
    //             <h2>{name}</h2>
    //             <h4>{price}</h4>
    //         </div>
    //     )
    // }

    // const BasketList = ({ items }) => {
    //     let mappedBasketItem = items.map(item => {
    //         return (
    //             <BasketItemCard
    //                 name={item.name}
    //                 price={item.price}
    //             />
    //         )
    //     })
    //     return(
    //         <div className='BasketItemList'>{mappedBasketItem}</div>
    //     )
    // }

    // function AddToCart(input) {
    //     const purchasingItem = items.find(item => item.id == input);
    //     setBasketItem([...basketItem,purchasingItem])
    // }

    // function searchFunction(searchInput) {
    //     const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
    //     setFilteredItems(filtered);
    // }

    return (
        <>
            <Layout />
            <div className='ItemDisplay'>
                <Bakery />
                <Dairy />
                <Drinks />
                <Fruits />
                <Vegetable />
                <Meat />
                <Toiletries />
                <Wellbeing />
                {/* <ItemList items={filteredItems ? filteredItems : items} handelAddToCard={AddToCart} /> */}
            </div>
            <Footer />
        </>

    )



}
