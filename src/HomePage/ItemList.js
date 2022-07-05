import ItemCard from "./ItemCard";
import Carousel from 'react-material-ui-carousel';
const ItemList = ({ items, propsTitle }) => {

    return (
        <div className='ItemListContainer'>
            <h2 className="CategoryTitle">{propsTitle}</h2>
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