import ItemCard from "./ItemCard";
const ItemList = ({ items, Title , AddToCart}) => {

    return (
        <div className='ItemListContainer'>
            <h2 className="CategoryTitle">{Title}</h2>
            <div className='ItemCardContainer'>
                {
                    items.map(item => {
                    return (
                        <ItemCard
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                            key={item.id}
                            id={item.id}
                            imagepath={item.imagepath}
                            AddToCart={AddToCart}
                        />
                    )
                })
            }
            </div>
            <div className="padding"></div>
        </div >
    )
}

export default ItemList