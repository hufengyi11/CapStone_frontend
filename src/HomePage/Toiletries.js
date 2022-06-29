import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function Toiletries() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/toiletries')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='ItemDisplay'>
            <h3>Toiletries</h3>
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