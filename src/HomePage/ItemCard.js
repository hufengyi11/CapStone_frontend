import React from 'react'

function ItemCard({ name, price, rating }) {
  return (
    <div className='itemcontainerwithcart'>
      <article className='itemcontainer'>
        <p>image</p>
      </article>
      <h2 className='itemtitle'>{name}</h2>
      <p>£{price}</p>
      <p>{rating} star</p>
      <button className='Addtocart'>Add to Cart</button>
    </div>

  )
}

export default ItemCard