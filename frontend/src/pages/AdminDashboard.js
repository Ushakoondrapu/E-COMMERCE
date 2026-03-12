import React, { useEffect } from 'react'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const role = localStorage.getItem("role")
        if (!token || role !== "ADMIN") {
            alert("Access Denied. Admin only.")
            navigate("/")
        }
    }, [navigate])

    const goToAddProduct = () => {
        navigate("/add-product");
    };

    const goToEditProduct = () => {
        navigate("/edit-product");
    };

    const goToDeleteProduct = () => {
        navigate("/delete-product");
    };

    return (
        <div className='admin'>
            <h2>Admin Dashboard</h2>
            <div className='admin-buttons'>
                <button onClick={goToAddProduct}>Add Product</button>
                <button onClick={goToEditProduct}>Edit Product</button>
                <button onClick={goToDeleteProduct}>Remove Product</button>
            </div>
        </div>
    )
}

export default AdminDashboard
