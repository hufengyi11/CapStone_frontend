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

    return (
        <>
            <h2>{props.category}</h2>
            <ItemList props={props} />
        </>

    )
}

export default Category