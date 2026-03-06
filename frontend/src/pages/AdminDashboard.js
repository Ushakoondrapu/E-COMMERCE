import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <div className='admin'>
            <h2>Admin Dashboard</h2>
            <div className='admin-buttons'>
                <button>Add Product</button>
                <button>Edit Product</button>
                <button>Remove Product</button>
            </div>
        </div>
    )
}

export default AdminDashboard
