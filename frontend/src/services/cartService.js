export const getCart = () => {
    const cart = localStorage.getItem("cart");
    const items = cart ? JSON.parse(cart) : [];
    return items.map(item => ({
        ...item,
        quantity: item.quantity ? item.quantity : 1
    }))
};

export const addToCart = (product) => {
    let cart = getCart();
    const existingProduct = cart.find(item => item.id === product.id)
    if (existingProduct) {
        existingProduct.quantity += 1
    } else {
        cart.push({
            ...product,
            quantity: 1
        })
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (index) => {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
};