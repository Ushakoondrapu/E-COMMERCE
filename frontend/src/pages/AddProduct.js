import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct = () => {

    const[name,setName] = useState([]);
    const[price,setPrice] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Product added successfully");
    }
    return (
        <div className='add-product'>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='name'
                    value={name}
                    placeholder='Product Name'
                    onChange={(e) => {setName(e.target.value)}}
                />

                <input
                    type='price'
                    value={price}
                    placeholder='Product Price'
                    onChange={(e) => {setPrice(e.target.value)}}
                />

                <button type='Submit'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct
