import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function CategoryDairy({ dairyItem }) {
    const [items, setItems] = useState([]);

    const ItemList = ({ handelAddToCard }) => {
        let mappedshoppingItem = dairyItem.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                    id={item.id}
                    imagepath={item.imagepath}
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

    const ItemCard = ({ id, name, price, rating, imagepath, handelAddToCard }) => {
        return (
            <div className='itemcontainerwithcart'>
                <div className='itemcontainer'>
                    <img className='itemimage' src={`${imagepath}.jpeg`} />
                </div>
                <h2 className='itemtitle'>{name}</h2>
                <p className='price'>£{price}</p>
                <p className='rating'>{rating} star</p>
                <button className='AddtocartButton' onClick={() => handelAddToCard(id)}>+</button>
            </div>
        )
    }



    return (
        <div className='ItemList'>
            <div className='ItemDisplay'>
                <h3 className='categorytitle'>Dairy</h3>
                <div className='ItemList'>
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}
