import { useState } from "react";
import PostItem from "./API/PostItem";


const AddNewItem = () => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemRating, setItemRating] = useState(0);
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
      alert(`${result.name} posted`);
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
        itemsCount: 0
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
        <form onSubmit={handleFormSubmit}>
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
          </label>
          <button className="button">Submit</button>
        </form>
      </>
    );
  };

  export default AddNewItem