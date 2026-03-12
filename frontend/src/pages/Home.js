import React,{useState, useEffect} from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { getProducts } from '../services/productService';
import { addToCart } from '../services/cartService';
import { isAdmin } from '../utils/auth';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const navigate = useNavigate()
    const handleAddToCart = (product) => {
        const token = localStorage.getItem("token")
        // If user not logged in
        if (!token) {
            alert("Please register or login to add items to cart")
            navigate("/register")
            return
        }
        // If logged in
        addToCart(product)
        window.dispatchEvent(new Event("cartUpdated"))
    }
    return (
        <>
            <div className='home'>
                <h1>Welcome to Our Store</h1>
                <p>But the best products online</p>
                <Link to='/products'>
                    <button className='shop-btn'>Shop Now</button>
                </Link>
            </div>
            <div className='product-section'>
                <h2>Our Products</h2>
                <div className='product-list'>
                    {products.map(product => (
                        <div key={product.id} className='product-card'>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>₹{product.price}</p>
                            

                            {!isAdmin() && (
                            <button onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <footer className='footer'>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Contact US</p>
            </footer>
        </>
    )
}

export default Home
