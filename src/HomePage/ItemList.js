import ItemCard from "./ItemCard";
const ItemList = ({ items, Title , AddToCart}) => {

const ItemList = ({ items, propsTitle }) => {
    return (
        <div className='ItemListContainer'>
            <h1 className="CategoryTitle">{Title}</h1>
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
        </div >
    )
}

export default ItemList