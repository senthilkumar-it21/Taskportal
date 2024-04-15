import React from 'react';
import axios from 'axios';
import { emailValidator, passwordValidator } from '../components/regexValidator';
import { useHistory, Link } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const [input, setInput] = React.useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');

    // Handle input change event
    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const formSubmitter = async e => {
        e.preventDefault();
        setSuccessMessage('');


        // Send POST request to register user
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', input);
            setSuccessMessage('Registration successful');
            localStorage.setItem('auth', true); // Store authentication state in local storage
            history.push('/'); // Redirect to home page after successful registration
        } catch (error) {
            setErrorMessage('Error registering user');
            console.error(error);
        }
    };

    return (
        <div>
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form className="login100-form validate-form" onSubmit={formSubmitter}>
                            <span className="login100-form-title p-b-49">Register</span>
                            {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                            {successMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                            <div className="wrap-input100 validate-input m-b-23" data-validate="Email is required">
                                <span className="label-input100">Email</span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    placeholder="Type your email"
                                    onChange={handleChange}
                                />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Type your password"
                                    onChange={handleChange}
                                />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn" />
                                    <button className="login100-form-btn">Register</button>
                                </div>
                            </div>
                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>Already have an account? </span>
                                <Link to="/Login" className="txt2">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1" />
        </div>
    );
};

export default Register;
