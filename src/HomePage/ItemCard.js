import React from 'react'
import { FaCartPlus, FaPlus, FaPlusCircle } from "react-icons/fa";

function ItemCard({ name, price, rating }) {
  return (
    <div className='itemcontainerwithcart'>
      <article className='itemcontainer'>
        <p>image</p>
      </article>
      <div className='imagecontainer'>
      <button className='Addtocart'><FaPlus /></button>
      <h2>{name}</h2>
      <p>£{price}</p>
      <p>{rating} star</p>
      </div>
    </div>

  )
}

export default ItemCard