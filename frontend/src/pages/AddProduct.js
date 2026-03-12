import React, { useState } from 'react'
import './AddProduct.css'
import { addProduct } from '../services/productService';

const AddProduct = () => {

    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const[description, setDescription] = useState([]);

    const handleSubmit = (e) => {
        const product = {
            name,
            price,
            description
        };

        addProduct(product)
            .then(() => {
                alert("Product Added");
            })
            .catch(() => {
                alert("Error adding product");
            });
    }
    return (
        <div className='add-product'>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='name'
                    value={name}
                    placeholder='Product Name'
                    onChange={(e) => { setName(e.target.value) }}
                />

                <input
                    type='price'
                    value={price}
                    placeholder='Product Price'
                    onChange={(e) => { setPrice(e.target.value) }}
                />

                <input
                    type='description'
                    value={description}
                    placeholder='Product Description'
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <button type='Submit'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct
