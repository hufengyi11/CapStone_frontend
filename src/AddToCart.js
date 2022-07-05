function AddToCart(input) {
    const purchasingItem = items.find(item => item.id === input);
    setBasketItem([...basketItem, purchasingItem])
}

export default AddToCart;