import { useState } from "react";
import DeleteItem from "./API/DeleteItem"
import '../Stores/Stores.css';


const RemoveItem = () => {
    const [itemId, setItemId] = useState(0);

    const handleItemIdChange = (event) => setItemId(event.target.value);

    const toDeleteItems = async (items) => {
      const result = await DeleteItem(JSON.stringify(items));
      console.log(result);
      alert("Item is removed")
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const items = {
        id: itemId,
        items: [],
        itemsCount: 0,
      };

      toDeleteItems(items);
      setItemId();
    };

    return (
      <div className="Container">
        <h2>Delete An Item </h2>
        <form className="form">
          <label className="label">
            Item id:<br />
            <input
              type="number"
              placeholder="Item id"
              onChange={handleItemIdChange}
              className="label"
              value={itemId}
            />
          </label>
          <button className="button" onClick={(event) => handleFormSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  };

  export default RemoveItem;