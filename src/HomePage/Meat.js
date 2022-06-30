import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Item.css'

export default function Meat() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/meat')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, []);

    return (
        <div className='ItemDisplay'>
            <h3>Meat</h3>
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
