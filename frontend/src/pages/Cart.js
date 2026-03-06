import React, { useState } from 'react'
import './Cart.css'

const Cart = () => {

    const[cartItems, setCartItems] = useState([
        {id:1, name:"Mobile", price:20000},
        {id:2, name:"Laptop", price:60000},
        {id:3, name:"Wired Earphones", price:1000},
        {id:4, name:"Power Bank", price:1500},
        {id:5, name:"Air Conditioner", price:35000},
        {id:6, name:"Water Geyser", price:12000},
        {id:7, name:"Ceiling Fan", price:2300}
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }
    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <div className='cart-item' key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: RS.{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart
