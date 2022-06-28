import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Item.css'

export default function Drinks() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/drinks')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h3>Drinks</h3>
            <div className='ItemList'>
                {
                    items.map(item =>
                        <button className='ItemCard' key={item.id}>{item.name}</button>
                    )
                }
            </div>
        </div>
    )
}
