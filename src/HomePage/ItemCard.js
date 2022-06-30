import React from 'react'

function ItemCard({name, price, rating}) {
  return (
    <article className='itemcontainer'>
        <h2>{name}</h2>
        <p>£{price}</p>
        <p>{rating} star</p>
    </article>
  )
}

export default ItemCard