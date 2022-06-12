import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input type="password" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New To Ema-Jhon?<Link className='form-link' to='/signup'> Create New Account</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;