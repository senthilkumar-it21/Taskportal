import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [input, setInput] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        setSuccessMessage('');
        setErrorMessage('');

        try {
            // Send POST request to login endpoint with input data
            const response = await axios.post('http://localhost:8080/api/users/login', input);
            
            // Assuming the backend returns user data upon successful login
            const userData = response.data;

            // Save user data to local storage or state for further use
            localStorage.setItem('userData', JSON.stringify(userData));

            setSuccessMessage('Login successful');
            history.push('/');
        } catch (error) {
            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-49">Login</span>
                            {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                            {successMessage && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                            <div className="wrap-input100 validate-input m-b-23">
                                <span className="label-input100">Email</span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    placeholder="Type your email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Password</span>
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Type your password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn" />
                                    <button type="button" className="login100-form-btn" onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>Don't have an account?</span>
                                <Link to="/register">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
