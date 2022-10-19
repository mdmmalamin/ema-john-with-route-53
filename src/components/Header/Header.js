import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log(user.uid);
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
                    {user?.uid ?
                        <></>
                        :
                        <>
                            <Link to="/login">Login</Link>
                        </>
                    }
                    <Link to="/signup">Sign up</Link>
                    <span>{user.uid}</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;