const ItemCard = ({ id, name, price, rating, imagepath }) => {
    return (
        <div className='itemcontainerwithcart'>
            <div className='itemcontainer'>
                <img className='itemimage' src={`${imagepath}.jpeg`} alt="image" />
                <button className='AddtocartButton'>+</button>
            </div>
            <h2 className='itemtitle'>{name}</h2>
            <p className='price'>£{price}</p>
            <p className='rating'>{rating} star</p>
        </div>
    )
}

export default ItemCard