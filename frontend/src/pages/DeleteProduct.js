import React, { useState, useEffect } from 'react'
import './DeleteProduct.css'
import { getProducts, deleteProduct } from '../services/productService'

const DeleteProduct = () => {

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
    const handleDeleteProduct = (id) => {
        deleteProduct(id)
            .then(() => {
                alert("Product Deleted")
                loadProducts()
            })
            .catch(() => {
                alert("Delete Failed")
            })
    }
    return (
        <div className='delete-product'>
            <h2>Delete Product</h2>
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <span>
                        {product.name} - ₹{product.price}
                    </span>
                    <button
                        onClick={() => handleDeleteProduct(product.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DeleteProduct