import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <div className='header'>
                <img src={Logo} alt="ema-john logo" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Order</Link>
                    {/* <Link to="/orderReview">Order Review</Link> */}
                    <Link to="inventory">Manage Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/Login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;