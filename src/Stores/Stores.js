import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import theStore from'./theStores.css';
import Navigation from '../Layout/Layout';
import axios from 'axios'

export default function Stores(){

    useEffect(() => {
        axios.get('http://localhost:8080/stores')
            .then(res => {
                const stores = res.data;
                setStores(stores);
            }).catch((err) => console.log(err));
    }, [])

    const [stores, setStores] = useState([]);
    const [filteredStores] = useState();

    const StoreViewing = ({ id, name, opening, closing, location, review }) => {
        return (
            <div className='storeViewingLocations'>
                <h2 className='storeName'>{name}</h2>
                <p>Opening: {opening} am</p>
                <p>Closing: {closing} pm </p>
                <p>Location: {location}</p>
                <p>Review: {review}</p>
            </div>
        )
    }

    const StoreList = ({stores}) => {
        let mappedStoreViewing = stores.map(item => {
            return (
                <StoreViewing
                    name={item.name}
                    opening={item.opening}
                    closing={item.closing}
                    location = {item.location}
                    review = {item.review}
                    key={item.id}
                />
            )
        })

        return (
            <div className='StoreListContainer'>
                <div className='StorelocationsContainer'>{mappedStoreViewing}</div>
            </div>
        )
    }

    return (
        <>
            <Navigation />
            <h1 className='ourStores'>
                Our Stores
            </h1>
            <div className='StoreDisplay'>
                <StoreList stores={stores} />
            </div>
            <div className='padding'></div>
            <Footer />
        </>
    )
}