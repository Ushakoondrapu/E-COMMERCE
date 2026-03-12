import React, { useState, useEffect } from 'react'
import './CheckOut.css'
import { getCart } from '../services/cartService'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const cart = getCart()
        setCartItems(cart)
        const role = localStorage.getItem("role");

    if(role === "ADMIN"){
        alert("Admins cannot checkout");
        navigate("/");
    }
    }, [])

    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)

    const placeOrder = () => {
        alert("Order Placed Successfully")
        localStorage.removeItem("cart")
        setCartItems([])
        window.dispatchEvent(new Event("cartUpdated"))
    }

    return (

        <div className='checkout'>
            <h2>Check Out</h2>
            {cartItems.map(item => (
                <div key={item.id} className='checkout-item'>
                    <h3>{item.name}</h3>
                    <p>
                        Rs.{item.price} × {item.quantity}
                    </p>
                </div>
            ))}
            <h3>Total : Rs.{total}</h3>
            <button onClick={placeOrder}>
                Place Order
            </button>
        </div>
    )
}

export default CheckOut