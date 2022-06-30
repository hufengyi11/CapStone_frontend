import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function Bakery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/bakery')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='ItemDisplay'>
            <h3>Bakery</h3>
            <div className='ItemList'>
                {
                    items.map(item =>
                        <div key={item.id} className='ItemGroup'>
                            <div className='ItemCard'></div>
                            {`${item.name}`}
                            <button>Add to cart</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
