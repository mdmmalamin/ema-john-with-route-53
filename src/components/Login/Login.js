import { faEarth} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <h2 className='login-title'>Login</h2>
            <form className='login-form'>
                <div className='login-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='login-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='new-to-ema'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            <p className='or'>or</p>
            <button className='google-login'>
                <FontAwesomeIcon className='login-icon' icon={faEarth}></FontAwesomeIcon>
                Continue with Google
            </button>

        </div>
    );
};

export default Login;