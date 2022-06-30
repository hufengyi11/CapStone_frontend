import React from 'react'

function ItemCard({name, price, rating, description}) {
  return (
    <article>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </article>
  )
}

export default ItemCard