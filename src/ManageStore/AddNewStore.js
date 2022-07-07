import { useState } from 'react';
import '../Stores/Stores.css';
import PostStore from "./API/PostStore";

const AddNewStore = () => {
    const [storeName, setStoreName] = useState("");
    const [storeOpening, setStoreOpening] = useState(0);
    const [storeClosing, setStoreClosing] = useState(0);
    const [storeLocation, setStoreLocation] = useState("");
    const [storeReview, setStoreReview] = useState("");

    const handleNameChange = (event) => setStoreName(event.target.value);
    const handleOpeningChange = (event) => setStoreOpening(event.target.value);
    const handleClosingChange = (event) => setStoreClosing(event.target.value);
    const handleLocationChange = (event) =>
      setStoreLocation(event.target.value);
    const handleReviewChange = (event) => setStoreReview(event.target.value);

    const toPostStores = async (stores) => {
      const result = await PostStore(JSON.stringify(stores));
      console.log(result);
      alert(`Your store id is ${result.id}`)
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const stores = {
        name: storeName,
        opening: storeOpening,
        closing: storeClosing,
        location: storeLocation,
        review: storeReview,
        stores: [],
        storesCount: 0,
      };

      toPostStores(stores);

      setStoreName("");
      setStoreOpening();
      setStoreClosing();
      setStoreLocation("");
      setStoreReview("");

    };
    return (
      <div className="Container">
        <h2>Add New Store </h2>
        <form className="form">
          <label className="label">
            Name: <br />
            <input
              type="text"
              placeholder="Store Name"
              onChange={handleNameChange}
              className="label"
              value={storeName}
            />
          </label>
          <label className="label">
            Opening: <br />
            <input
              type="number"
              placeholder="Opening time AM "
              onChange={handleOpeningChange}
              className="label"
              value={storeOpening}
            />
          </label>
          <label className="label">
            Closing: <br />
            <input
              type="number"
              placeholder="Closing time PM"
              onChange={handleClosingChange}
              className="label"
              value={storeClosing}
            />
          </label>
          <label className="label">
            Location: <br />
            <input
              type="text"
              placeholder="Location"
              onChange={handleLocationChange}
              className="label"
              value={storeLocation}
            />
          </label>
          <label className="label">
            Review: <br />
            <input
              type="text"
              placeholder="Review out of 5"
              onChange={handleReviewChange}
              className="label"
              value={storeReview}
            />
          </label>
          <button className="button" onClick={(event) => handleFormSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  };

  export default AddNewStore;