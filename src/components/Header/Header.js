import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <div className='header'>
                <img src={Logo} alt="ema-john logo" />
                <div>
                    <a href="/Order">Order</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;