import React from 'react';
import PostStore from './PostStore';
import axios from "axios";
import {useState} from 'react';

const AddNewStoreScreen = () => {

    const [storeName, setStoreName] = useState("");
    const [storeOpening, setStoreOpening] = useState(0);
    const [storeClosing, setStoreClosing]= useState(0);
    const [storeLocation, setStoreLocation] = useState("");
    const [storeReview, setStoreReview] = useState("");

    const handleNameChange = event => setStoreName(event.target.value);
    const handleOpeningChange = event => setStoreOpening(event.target.value);
    const handleClosingChange = event => setStoreClosing(event.target.value);
    const handleLocationChange = event => setStoreLocation(event.target.value);
    const handleReviewChange = event => setStoreReview(event.target.value);

    const toPostStores = async (stores) => {
        const result = await PostStore(JSON.stringify(stores))
        console.log(result)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const stores = {
            name: storeName,
            opening: storeOpening,
            closing: storeClosing,
            location: storeLocation,
            review: storeReview,
            stores: [],
            storesCount:0
        }

        toPostStores(stores);

        setStoreName('');
        setStoreOpening();
        setStoreClosing();
        setStoreLocation('');
        setStoreReview('');
    }

    return (
        <>
            <div>Add New Stores: </div>
            <form>
                <label className="label">
                    Name:
                    <input
                        type="text"
                        placeholder='Store Name'
                        onChange={handleNameChange}
                        className="label"
                        value={storeName}
                    />
                </label>
                <label className="label">
                    Opening:
                    <input
                        type="number"
                        placeholder='Opening time AM '
                        onChange={handleOpeningChange}
                        className="label"
                        value={storeOpening}
                    />
                </label>
                <label className="label">
                    Closing:
                    <input
                        type="number"
                        placeholder='Closing time PM'
                        onChange={handleClosingChange}
                        className="label"
                        value={storeClosing}
                    />
                </label>
                <label className="label">
                    Location:
                    <input
                        type="text"
                        placeholder='Location'
                        onChange={handleLocationChange}
                        className="label"
                        value={storeLocation}
                    />
                </label>
                <label className="label">
                    Review:
                    <input
                        type="text"
                        placeholder='Review out of 5'
                        onChange={handleReviewChange}
                        className="label"
                        value={storeReview}
                    />
                
                    <label className="label">Submit</label>
                    <button className="yesButton-invisible" onClick={(event) => handleFormSubmit(event)}></button>
                </label>
            </form>
          
        </>
    )

}


export default AddNewStoreScreen;