import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import './theStores.css';
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

    const StoreViewing = ({ name, opening, closing, location, review, imagepath }) => {
        return (
            
            <div className='storeViewingLocations'>
                <img className='itemimage' src={`${imagepath}.jpeg`} alt="stores‹" />
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
                    imagepath={item.imagepath}
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
            <div className='storewrapper'>
            <h1 className='ourStores'>
                Our Stores
            </h1>
            <p className='stores'>Here are the list of stores that have partnered with us to delivery your groceries!</p>
            <div className='StoreDisplay'>
                <StoreList stores={stores} />
            </div>
            </div>
            <div className='padding'></div>
            <Footer />
        </>
    )
}