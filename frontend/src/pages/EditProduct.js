import React, { useState } from 'react'
import './EditProduct.css'

const EditProduct = () => {

    const[name,setName] = useState([]);
    const[price,setPrice] = useState([]);

    const updateProduct = (e) => {
        e.preventDefault();
        alert("Product Updated")
    }

    return (
        <div className='edit-product'>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <input
                type='name'
                value={name}
                placeholder='Product Name'
                onChange={(e) => {setName(e.target.value)}}
                />

                <input
                type='price'
                value={price}
                placeholder='Product Name'
                onChange={(e) => {setPrice(e.target.value)}}
                />

                <button type='Submit'>Update Product</button>
            </form>
        </div>
    )
}

export default EditProduct
