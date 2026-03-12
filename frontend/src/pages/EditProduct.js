import React, { useState, useEffect } from 'react'
import './EditProduct.css'

import { getProducts, updateProduct } from '../services/productService'
const EditProduct = () => {
    const [products, setProducts] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const selectProduct = (product) => {
        setSelectedId(product.id)
        setName(product.name)
        setPrice(product.price)
        setDescription(product.description)
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const product = {
            name,
            price,
            description
        }
        updateProduct(selectedId, product)
            .then(() => {
                // alert("Product Updated")
                loadProducts()
            })
            .catch(() => {
                alert("Update Failed")
            })
    }
    

    return (
        <div className='edit-product'>
            <h2>Update Product</h2>
            <h3>Select Product</h3>
            {products.map(product => (
                <div key={product.id}>
                    {product.name} - ₹{product.price} - {product.description}
                    <button className='edit-btn' onClick={() => selectProduct(product)}>
                        Edit
                    </button>
                </div>
            ))}
            <form onSubmit={handleUpdateProduct}>
                <input
                    type='name'
                    value={name}
                    placeholder='Product Name'
                    onChange={(e) => { setName(e.target.value) }}
                />

                <input
                    type='price'
                    value={price}
                    placeholder='Product Name'
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <input
                    type='description'
                    value={description}
                    placeholder='Product description'
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className='updatebtn' type='Submit'>Update Product</button>
            </form>
        </div>
    )
}

export default EditProduct
