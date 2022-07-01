import React from 'react'
import { FaCartPlus, FaPlus, FaPlusCircle } from "react-icons/fa";

function ItemCard({ name, price, rating }) {
  return (
    <div className='itemcontainerwithcart'>
      <article className='itemcontainer'>
        <p>image</p>
      </article>
      <h2>{name}</h2>
      <p>£{price}</p>
      <p>{rating} star</p>
      <button className='Addtocart'><FaPlus /></button>
    </div>

  )
}

export default ItemCard