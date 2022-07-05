const ItemCard = ({ id, name, price, rating, imagepath }) => {
    const AddToCart = () => {
        const basketItem = { name: name, price: price };
        setCart(currentState => [...currentState, basketItem]);
    }

    return (
        <div className='itemcontainerwithcart'>
            <div className='itemcontainer'>
                <img className='itemimage' src={`${imagepath}.jpeg`} alt="image" />
                <button className='AddtocartButton' onClick={AddToCart}>+</button>
            </div>
            <h2 className='itemtitle'>{name}</h2>
            <p className='price'>£{price}</p>
            <p className='rating'>{rating} star</p>
        </div>
    )
}

export default ItemCard;