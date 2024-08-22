import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./login.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toastMessage) {
      toast.success(location.state.toastMessage);
    }
  }, [location.state]);

  const navigate = useNavigate();  // Use navigate for navigation

  const handlesigninClick = () => {
     navigate('/signin');  // Navigate to the login page
  };

  const validateInputs = () => {
    const errors = {};
    let success = true;

    if (!email.trim()) {
      success = false;
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      success = false;
      errors.email = 'Please enter a valid email';
    }
    if (!password.trim()) {
      success = false;
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      success = false;
      errors.password = 'Password must be at least 8 characters long';
    }
    setErrors(errors);
    return success;
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
    try {
      const response = await axios.post('http://localhost:8800/login', { email, password });
      console.log(email,password);
      
      console.log('Login Successful:', response.data);
       navigate('/', { state: { toastMessage: 'Login Successful!' } });
     

      // Redirect or handle login success
    } catch (error) {
      console.error('Login Error:', error);
      toast.error('Login Failed. Please try again.');
      // Handle login error
    }
  }else{
    console.log('Validation failed:', errors);
    toast.error('Validation failed. Please check your inputs.');
  }
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <span>or <Link  id='log' onClick={handlesigninClick}> Create an Account</Link></span>
      <form onSubmit={handleLogin}>
        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor = "email">Email</label>
          <input
          id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            {errors.email && <div className="error-text">{errors.email}</div>}

        </div>
        <div className={`form-group ${errors.password ? 'error' : ''}`}>
          <label htmlFor = "password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            {errors.password && <div className="error-text">{errors.password}</div>}

        </div>
        <button className='inside-login' type="submit">Login</button>
      </form>
      <span className='term'>By clicking on Login, I accept the <Link id='tc'> Terms & Conditions</Link> & <Link id='tc'> Privacy Policy</Link></span>
      <ToastContainer />
    </div>
    
  );
};

export default Login;

