import DeleteStore from './API/DeleteStore';
import { useState } from 'react';
import '../Stores/Stores.css';


const RemoveStore = () => {
    const [storeId, setStoreId] = useState(0);

    const handleStoreIdChange = (event) => setStoreId(event.target.value);

    const toDeleteStores = async (stores) => {
      const result = await DeleteStore(stores);
      console.log(result);
      alert("Store is deleted")
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
      <div className="Container">
        <h2>Delete A Stores </h2>
        <form className="form">
          <label className="label">
            Store id: <br />
            <input
              type="number"
              placeholder="Store Id"
              onChange={handleStoreIdChange}
              className="label"
              value={storeId}
            />
          </label>
          <button className="button" onClick={(event) => handleFormSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  };

  export default RemoveStore;