import ItemCard from "./ItemCard"

const Category = ({ props }) => {

    const ItemList = () => {
        let mappedshoppingItem = props.map(item => {
            return (
                <ItemCard
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    key={item.id}
                    id={item.id}
                    imagepath={item.imagepath}
                />
            )
        })

        return (
            <div className='ItemListContainer'>
                <div className='ItemCardContainer'>{mappedshoppingItem}</div>
            </div>
        )
    }

    const ItemCard = ({ id, name, price, rating, imagepath }) => {
        return (
            <div className='itemcontainerwithcart'>
                <div className='itemcontainer'>
                    <img className='itemimage' src={`${imagepath}.jpeg`} />
                </div>
                <h2 className='itemtitle'>{name}</h2>
                <p className='price'>£{price}</p>
                <p className='rating'>{rating} star</p>
                <button className='AddtocartButton'>+</button>
            </div>
        )
    }

    return (
        <>
            <h2>{props.category}</h2>
            <ItemList props={props} />
        </>

    )
}

export default Category