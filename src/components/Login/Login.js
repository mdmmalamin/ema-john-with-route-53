import { faEarth} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='login-container'>
            <h2 className='login-title'>Login</h2>
            <form onSubmit={handleSignIn} className='login-form'>
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