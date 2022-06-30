import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function Dairy() {
    const [items, setItems] = useState([]);

    const handleClick = (item) => {
        console.log(item.id)
    }

    useEffect(() => {
        axios.get('http://localhost:8080/items/dairy')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='ItemDisplay'>
            <h3>Dairy</h3>
            <div className='ItemList'>
                {
                    items.map(item =>
                        <div key={item.id} className='ItemGroup'>
                            <div className='ItemCard'></div>
                            {`${item.name}`}
                            <button onClick={() => handleClick(item)}>Add to cart</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
