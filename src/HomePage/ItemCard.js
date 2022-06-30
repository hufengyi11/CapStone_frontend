import React from 'react'

function ItemCard({ name, price, rating }) {
  return (
    <div className='itemcontainerwithcart'>
      <article className='itemcontainer'>
        <h2>{name}</h2>
        <p>£{price}</p>
        <p>{rating} star</p>
      </article>
      <button className='Addtocart'>Add to Cart</button>
    </div>

  )
}

export default ItemCard