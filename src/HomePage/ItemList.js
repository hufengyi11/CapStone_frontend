import ItemCard from "./ItemCard"

const ItemList = ({ props }) => {

    // const CategoryTitle = props[0].category

    return (
        <div className='ItemListContainer'>
            <h2>CategoryTitle</h2>
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
            }</div>
        </div>
    )
}

export default ItemList