import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home'>
                <h1>Welcome to Our Store</h1>
                <p>But the best products online</p>
                <button className='shop-btn'>Shop Now</button>
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
