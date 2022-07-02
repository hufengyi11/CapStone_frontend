import Layout from "../Layout/Layout"
import Footer from "../Footer/Footer"
import React, { useEffect, useState } from 'react'
import axios from "../LogIn/api/axios";

function BestSeller() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    const fiveStarItems = items.filter(i => i.rating == 5)
    const listItem = fiveStarItems.map((item) => {
        <li key={item.id}>{item.name}</li>
    })


    return (
        <div>
            <Layout />
            <ul>{listItem}</ul>
            <Footer />
        </div>
    )
}

export default BestSeller