import Layout from "../Layout/Layout"
import Footer from "../Footer/Footer"
import React, { useEffect, useState } from 'react'
import axios from "../LogIn/api/axios";
import "./BestSeller.css"

function BestSeller() {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState();
    const [basketItem, setBasketItem] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(res => {
                const items = res.data;
                setItems(items);
            }).catch((err) => console.log(err));
    }, [])

    const fiveStarItems = items.filter(i => i.rating == 5)


    const ItemCard = ({ name, price, rating, handelAddToCard }) => {
        return (
            <div className='itemcontainerwithcart'>
                <article className='itemcontainer'>
                    <p>image</p>
                </article>
                <h2 className='itemtitle'>{name}</h2>
                <p>£{price}</p>
                <p>{rating} star</p>
                <button className='AddtocartButton' onClick={(id) => handelAddToCard(id.target.parentElement.childNodes.item(1).innerText)}>+</button>
            </div>
        )
    }

    const ItemList = ({ items, handelAddToCard }) => {
        let mappedItem = items.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                    handelAddToCard={handelAddToCard}
                />
            )
        })

        return (
            <div className='ItemListContainer'>
                <div className='ItemCardContainer'>{mappedItem}</div>
            </div>
        )
    }

    const AddToCart = (input) => {
        const purchasingItem = items.filter(item => item.name == input);
        console.log(purchasingItem)
        basketItem.push(purchasingItem)
        console.log(basketItem)
    }

    function searchFunction(searchInput) {
        const filtered = items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredItems(filtered);
    }

    return (
        <div>
            <Layout searchFunction={searchFunction} />
             <div className="padding"></div>
            <div className='ItemDisplay'>
                <ItemList items={fiveStarItems} handelAddToCard={AddToCart} />
            </div>
            <Footer />
        </div>
    )
}

export default BestSeller