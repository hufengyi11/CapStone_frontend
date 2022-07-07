import React from "react";
import DeleteStore from "../API/DeleteStore";
import PostStore from "../API/PostStore";
import { useState } from "react";

const StorePage = () => {
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
      <>
        <div>Add New Stores: </div>
        <form>
          <label className="label">
            Name:
            <input
              type="text"
              placeholder="Store Name"
              onChange={handleNameChange}
              className="label"
              value={storeName}
            />
          </label>
          <label className="label">
            Opening:
            <input
              type="number"
              placeholder="Opening time AM "
              onChange={handleOpeningChange}
              className="label"
              value={storeOpening}
            />
          </label>
          <label className="label">
            Closing:
            <input
              type="number"
              placeholder="Closing time PM"
              onChange={handleClosingChange}
              className="label"
              value={storeClosing}
            />
          </label>
          <label className="label">
            Location:
            <input
              type="text"
              placeholder="Location"
              onChange={handleLocationChange}
              className="label"
              value={storeLocation}
            />
          </label>
          <label className="label">
            Review:
            <input
              type="text"
              placeholder="Review out of 5"
              onChange={handleReviewChange}
              className="label"
              value={storeReview}
            />
            <label className="label">Submit</label>
            <button onClick={(event) => handleFormSubmit(event)}></button>
          </label>
        </form>
      </>
    );
  };

  const RemoveStore = () => {
    const [storeId, setStoreId] = useState(0);

    const handleStoreIdChange = (event) => setStoreId(event.target.value);

    const toDeleteStores = async (stores) => {
      const result = await DeleteStore(JSON.stringify(stores));
      console.log(result);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const stores = {
        id: storeId,
        stores: [],
        storesCount: 0,
      };

      toDeleteStores(stores);

      setStoreId();
    };

    return (
      <>
        <div>delete Stores: </div>
        <form>
          <label className="label">
            store id:
            <input
              type="number"
              placeholder="store id"
              onChange={handleStoreIdChange}
              className="label"
              value={storeId}
            />
            <label className="label">Submit</label>
            <button onClick={(event) => handleFormSubmit(event)}></button>
          </label>
        </form>
      </>
    );
  };

  return (
    <>
      <AddNewStore />
      <RemoveStore />
    </>
  );
};

export default StorePage;
