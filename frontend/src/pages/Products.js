import React, { useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import './Product.css'
import { getProducts } from '../services/productService'

const Products = () => {
    const[search,setSearch] = useState("")
    const[price, setPrice] = useState('');
    

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const filteredProducts = products.filter(product => (
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (product.price <= Number(price) || price === "")
    ));

    
    return (
        <div className='products'>
            <h2>Our Products</h2>
            <div className='input-fields'>
            <input
            type='text'
            value={search}
            className='search'
            placeholder='Search by name'
            onChange={(e) => setSearch(e.target.value)}
            />
            <input
            type='text'
            value={price}
            className='price'
            placeholder='Search by price'
            onChange={(e) => setPrice(e.target.value)}
            />
            
            </div>
            <div className='product-list'>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
                
            </div>
        </div>
    )
}

export default Products
