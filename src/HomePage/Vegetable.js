import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function Vegetable() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/vegetables')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h3>Vegetables</h3>
            <div className='ItemList'>
                {
                    items.map(item =>
                        <button className='ItemCard' key={item.id}>{`${item.name}`}</button>
                    )
                }
            </div>
        </div>
    )
}
