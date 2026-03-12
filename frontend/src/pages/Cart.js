import React, {useState,useEffect} from 'react'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { getCart, removeFromCart } from '../services/cartService';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        const cart = getCart()
        setCartItems(cart.filter(item => item !== null))
        const role = localStorage.getItem("role");
    if(role === "ADMIN"){
        alert("Admins cannot access cart");
        navigate("/");
    }
    }, []);

    const handleRemove = (index) => {
        removeFromCart(index)
        const cart = getCart()
        setCartItems(cart.filter(item => item !== null))
        // setCartItems(cart)
        window.dispatchEvent(new Event("cartUpdated"))
    }


    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {cartItems.map((item,index) => (
                <div className='cart-item' key={index}>
                    <h3>{item.name}</h3>
                    <p>Price: RS.{item.price}</p>
                    <p>Quantity: {item.quantity || 1}</p>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
            ))}

            <Link to='/checkout'>
                <button>Proceed</button>
            </Link>
        </div>

    )
}

export default Cart
