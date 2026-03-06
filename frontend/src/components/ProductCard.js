import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {

    const addToCart = () => {
        alert(product.name +" added to cart successfully")
    }
    return (
        <div className='card'>
            <h3>{product.name}</h3>
            <p>Price: Rs.{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
