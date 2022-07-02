import Layout from "../Layout/Layout"
import Footer from "../Footer/Footer"
import React, { useEffect, useState } from 'react'
import axios from "../LogIn/api/axios";
import "./BestSeller.css"

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

    function click(){
        console.log(fiveStarItems)
    }


    return (
        <div>
            <Layout />
            <button className="itemlist" onClick={click}>Clicke me</button>
            <Footer />
        </div>
    )
}

export default BestSeller