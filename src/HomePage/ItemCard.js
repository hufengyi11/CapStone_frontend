const ItemCard = ({ id, name, price, rating, imagepath, AddToCart }) => {

<<<<<<< HEAD

    return (
        <div className='itemcontainerwithcart'>
            <div className='itemcontainer'>
                <img className='itemimage' src={`${imagepath}.jpeg`} alt="image" />
                <button className='AddtocartButton' onClick={() => AddToCart(id)}>+</button>
            </div>
            <h2 className='itemtitle'>{name}</h2>
            <p className='price'>£{price}</p>
            <p className='rating'>{rating} star</p>
        </div>
    )
=======
function ItemCard({name, price, rating, description}) {
  return (
    <article>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </article>
  )
>>>>>>> parent of 096e3f3 (added search function and restyled the shopping page)
}

export default ItemCard;