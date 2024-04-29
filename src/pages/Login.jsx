// Login.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Login.css';

const Login = ({ onLogin }) => {
    // Mock login function
    const handleLogin = () => {
        // Simulate successful login
        // Here you would typically call an API to authenticate the user
        onLogin();  // Call the onLogin callback to update isLoggedIn state
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    {/*<label htmlFor="username">Username:</label>*/}
                    <input type="text" id="username" name="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    {/*<label htmlFor="password">Password:</label>*/}
                    <input type="password" id="password" name="password" placeholder="Enter password" />
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
                <span className="txt1">
                If you don't have an account yet?
                <Link to="/sign-up" className="register-link">Register</Link>
                </span>

            </form>
        </div>
    );
};

export default Login;
