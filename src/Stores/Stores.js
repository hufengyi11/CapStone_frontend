import React, { useEffect, useState } from 'react'
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
    const [filteredStores, setFilteredStores] = useState();

    const StoreViewing = ({ id, name, opening, closing, location, review }) => {
        return (
            <div className='storeViewingLocations'>
                <article className='StorePics'>
                    <p>image</p>
                </article>
                <h2 className='storeName'>{name}</h2>
                <p>{opening}</p>
                <p>{closing}</p>
                <p>{location}</p>
                <p>{review}</p>
            </div>
        )
    }

    const StoreList = ({ stores}) => {
        let mappedStoreViewing = stores.map(item => {
            return (
                <StoreViewing
                    name={store.name}
                    opening={store.opening}
                    closing={store.closing}
                    location = {store.location}
                    review = {store.review}
                    key={item.id}
                    id={item.id}
                    handelAddToCard={handelAddToCard}
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
        
        <h1>
            dsadjsadi
            </h1>

            <div className='StoreDisplay'>
                <StoreList store={filteredStore ? filteredStore : store} />
            </div>
            <Footer />
        </>
    )
}