import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }
        if(password !== confirm) {
            setError('Your password did not match.')
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='signup-container'>
            <h2 className='login-title'>Sign Up</h2>
            <form onSubmit={handleSignup} className='login-form'>
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
                    <input type="password" name="confirm" required />
                </div>
                <span className='text-error'>{error}</span>
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