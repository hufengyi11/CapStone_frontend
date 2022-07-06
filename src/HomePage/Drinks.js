import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Item.css'

export default function Drinks() {
    const [items, setItems] = useState([]);

    const handleClick = (item) => {
        console.log(item)
    }

    useEffect(() => {
        axios.get('http://localhost:8080/items/drinks')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    return (
        <div className='ItemDisplay'>
            <h3>Drinks</h3>
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
