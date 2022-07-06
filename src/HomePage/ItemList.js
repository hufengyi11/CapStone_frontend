import ItemCard from "./ItemCard";
const ItemList = ({ items, Title , AddToCart}) => {

// const ItemList = ({ items, propsTitle }) => {
    return (
        <div className='ItemListContainer'>
            <h1 className="CategoryTitle">{Title}</h1>
            <div className='ItemCardContainer'>
                {
                    items.map(item => {
                    return (
                        <ItemCard item ={item} key={item.id} />
                    )
                })
            }
            </div>
        </div >
    )
}

export default ItemList;