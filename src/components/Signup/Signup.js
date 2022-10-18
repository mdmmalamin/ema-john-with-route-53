import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='signup-container'>
            <h2 className='login-title'>Sign Up</h2>
            <form className='login-form'>
                <div className='login-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='login-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='login-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm password" required />
                </div>
                <input className='btn-submit' type="submit" value="Signup" />
            </form>
            <p className='new-to-ema'>Already have an account? <Link to='/signup'>Login</Link></p>
            <p className='or'>or</p>
            <button className='google-login'>
                <FontAwesomeIcon className='login-icon' icon={faEarth}></FontAwesomeIcon>
                Continue with Google
            </button>

        </div>
    );
};

export default Signup;