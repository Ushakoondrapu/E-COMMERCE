import React, { useState,useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { getCart } from '../services/cartService'
import { isAdmin } from '../utils/auth'

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role,setRole] = useState(null)
    const navigate = useNavigate()

    const updateCartCount = () => {
        const cart = getCart()
        const totalItems = cart.reduce((total, item) => {
        return total + (item.quantity || 1)
    }, 0)
        setCartCount(totalItems)
    }

    const checkAuthStatus = () => {
        const token = localStorage.getItem("token")
        const storedRole = localStorage.getItem("role")
        if (token) {
            setIsLoggedIn(true)
            setRole(storedRole)
        } else {
            setIsLoggedIn(false)
            setRole(null)
        }
    }

    useEffect(() => {
        updateCartCount()
        checkAuthStatus()

        window.addEventListener("cartUpdated", updateCartCount)
        window.addEventListener("authChanged", checkAuthStatus)
        
        return () => {
            window.removeEventListener("cartUpdated", updateCartCount)
            window.removeEventListener("authChanged", checkAuthStatus)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsLoggedIn(false);
        setRole(null)
        setCartCount(0);
        window.dispatchEvent(new Event("authChanged"))
        navigate("/");
    };
    return (
        <nav className='navbar'>
            <h2 className='logo'>E-Commerce</h2>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                {isLoggedIn && role === "ADMIN" && (
                    <li>
                        <Link to='/admin'>Admin Dashboard</Link>
                    </li>
                )}
                {!isLoggedIn ? (
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                ) : (
                    <li>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </li>
                )}

                {!isAdmin() && (
                <li>
                    <Link to='/cart' className='cart-count'>
                        🛒<span className='cart-badge'>{cartCount}</span>
                    </Link>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
