import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Vegetable.css'

export default function Vegetable() {
    const[items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items/vegetables')
        .then(res => {
            const items = res.data;
            setItems(items);
        }).catch((err) => console.log(err));
    }, []);

  return (
    <div>
        <p>Vegetables</p>
        <div className='ItemList'>
            {
                items.map(item => 
                 <p className='ItemCard' key={item.id}>{`${item.name}`}</p>   
                    )
            }
        </div>

    </div>
    

  )
}
