import ItemCard from "./ItemCard"

const ItemList = ({ props, propsTitle }) => {

    return (
        <div className='ItemListContainer'>
            <h2 className="CategoryTitle">{propsTitle}</h2>
            <div className='ItemCardContainer'>{
                props.map(item => {
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
            }
            </div>
            <div className="padding"></div>
        </div >
    )
}

export default ItemList