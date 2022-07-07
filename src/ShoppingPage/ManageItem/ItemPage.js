import React from 'react';
import PostItem from "../API/PostItem"
import DeleteItem  from "../API/DeleteItem"
import { useState } from "react";


const ItemPage = () => {
    const AddNewItem = () =>{
        const [itemName, setItemName] = useState("");
        const [itemPrice, setItemPrice] = useState(0);
        const [itemRating, setItemRating]= useState(0);
        const [itemCategory, setItemCategory] = useState("");
        const [itemDescription, setItemDescription] = useState("");

        const handleNameChange = event => setItemName(event.target.value);
        const handlePriceChange = event => setItemPrice(event.target.value);
        const handleRatingChange = event => setItemRating(event.target.value);
        const handleCategoryChange = event => setItemCategory(event.target.value);
        const handleDescriptionChange = event => setItemDescription(event.target.value);

        const toPostItems = async (items) => {
            const result = await PostItem(JSON.stringify(items))
            console.log(result)
        }

        const handleFormSubmit = (event) => {
            event.preventDefault();
            const items = {
                name: itemName,
                price: itemPrice,
                rating: itemRating,
                category: itemCategory,
                description: itemDescription,
                items: [],
                itemsCount:0
            }

            toPostItems(items);

            setItemName('');
            setItemPrice();
            setItemRating();
            setItemCategory('');
            setItemDescription('');
        }

        return (
            <>
                <div>Add New Items: </div>
                <form>
                    <label className="label">
                        Name:
                        <input
                            type="text"
                            placeholder='Item Name'
                            onChange={handleNameChange}
                            className="label"
                            value={itemName}
                        />
                    </label>
                    <label className="label">
                        Price:
                        <input
                            type="number"
                            placeholder='Cost (£)'
                            onChange={handlePriceChange}
                            className="label"
                            value={itemPrice}
                        />
                    </label>
                    <label className="label">
                        Rating:
                        <input
                            type="number"
                            placeholder='Review out of 5'
                            onChange={handleRatingChange}
                            className="label"
                            value={itemRating}
                        />
                    </label>
                    <label className="label">
                        category:
                        <input
                            type="text"
                            onChange={handleCategoryChange}
                            className="label"
                            value={itemCategory}
                        />
                    </label>
                    <label className="label">
                        description:
                        <input
                            type="text"
                            onChange={handleDescriptionChange}
                            className="label"
                            value={itemDescription}
                        />
                    
                        <label className="label">Submit</label>
                        <button className="yesButton-invisible" onClick={(event) => handleFormSubmit(event)}></button>
                    </label>
                </form>
            </>
        );
    };

    const RemoveItem = () => {
    const [itemId, setItemId] = useState(0);

    const handleItemIdChange = (event) => setItemId(event.target.value);

    const toDeleteItems = async (items) => {
      const result = await DeleteItem(JSON.stringify(items));
      console.log(result);
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
      <>
        <div>delete Items: </div>
        <form>
          <label className="label">
            Item id:
            <input
              type="number"
              placeholder="Item id"
              onChange={handleItemIdChange}
              className="label"
              value={itemId}
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
      <AddNewItem />
      <RemoveItem />
    </>
  );
};
export default ItemPage;