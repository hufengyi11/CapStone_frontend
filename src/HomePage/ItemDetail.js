import React from 'react'

function ItemDetail(item) {
    return (
        <>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.detail}</p>
            <p>{item.rating}</p>
            <p>{item.store_id}</p>
        </>

    )
}

export default ItemDetail