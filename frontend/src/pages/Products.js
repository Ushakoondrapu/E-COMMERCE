import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './Product.css'

const Products = () => {

    const [products] = useState([
        {id:1, name:"Mobile", price:20000},
        {id:2, name:"Laptop", price:60000},
        {id:3, name:"Wired Earphones", price:1000},
        {id:4, name:"Power Bank", price:1500},
        {id:5, name:"Air Conditioner", price:35000},
        {id:6, name:"Water Geyser", price:12000},
        {id:7, name:"Ceiling Fan", price:2300}
    ])
    return (
        <div className='products'>
            <h2>Our Products</h2>
            <div className='product-list'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Products
