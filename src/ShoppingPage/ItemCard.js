import { useContext } from "react";
import BasketContext from "../BasketContext/BasketContext";
import { AiFillStar } from "react-icons/ai";

const ItemCard = ({ item }) => {

    // as soon as we press the button, pass the item to purchase to basket

    const { basketItems, setBasketItems } = useContext(BasketContext)

    function AddToCart(item) {
        setBasketItems([...basketItems, item])
    }

    return (
        <div className='itemcontainerwithcart'>
            <div className='itemcontainer'>
                <img className='itemimage' src={`${item.imagepath}.jpeg`} alt="image" />
                <button className='AddtocartButton' onClick={() => {AddToCart(item)}}>+</button>
            </div>
            <h2 className='itemtitle'>{item.name}</h2>
            <p className='price'>£{item.price}</p>
            <p className='rating'>{item.rating} <AiFillStar /></p>
        </div>
    )
}

export default ItemCard;