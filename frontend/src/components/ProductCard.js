import React from 'react'
import './ProductCard.css'
import { addToCart } from '../services/cartService'
import { useNavigate } from 'react-router-dom'
import { isAdmin } from '../utils/auth'

const ProductCard = ({product}) => {
const navigate = useNavigate()
        const handleAdd = () => {
            const token = localStorage.getItem("token")
        // If user not logged in
        if (!token) {
            alert("Please register or login to add items to cart")
            navigate("/register")
            return
        }
        // If logged in
        addToCart(product);
        window.dispatchEvent(new Event("cartUpdated"))
    };
    return (
        <div className='card'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            

            {!isAdmin() && (
            <button onClick={handleAdd}>Add to Cart</button>
            )}
        </div>
    )
}

export default ProductCard
