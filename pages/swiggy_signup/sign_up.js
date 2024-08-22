// import React, { useState } from 'react';
// import axios from 'axios';
// import "./signup.css";
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [phonenumber, setPhoneNumber] = useState('');

//   const navigate = useNavigate();

//   const handleloginClick = () => {
//     navigate('/login');  // Navigate to the login page
//   }; 

  

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try{
//       const response =  await axios.post('http://localhost:8800/signin', { name, email, password, confirmpassword, phonenumber })
//       console.log('signup Successful:', response.data);
//       // Redirect or handle signup success
//     }
//   catch(error) {
//       console.error('signup Error:', error);
//       // Handle signup error
//     };
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <span>or <Link id='signup'  onClick={handleloginClick}> Login to your Account</Link></span>
//       <form onSubmit={handleSignup}>

//       <div className= "sig-form-group" >
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="sig-form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="sig-form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="sig-form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmpassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="sig-form-group">
//           <label>Phone Number</label>
//           <input
//             type="text"
//             value={phonenumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
        
//         <button className='inside-signin' type="submit">Sign Up</button>
//       </form>
//       <span className='sig-term'>By clicking on Login, I accept the <Link id='stc'> Terms & Conditions</Link> & <Link id='stc'> Privacy Policy</Link></span>
//     </div>
    
//   );
// };

// export default Signup;


import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./signup.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toastMessage) {
      toast.success(location.state.toastMessage);
    }
  }, [location.state]);

  const navigate = useNavigate();

  const handleloginClick = () => {
    navigate('/login');  // Navigate to the login page
  };

  // Validation function
  const validateInputs = () => {
    const errors = {};
    let success = true;

    if (!name.trim()) {
      success = false;
      errors.name = 'Name is required';
    }
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
    if (!confirmpassword.trim()) {
      success = false;
      errors.confirmpassword = 'Confirm password is required';
    } else if (confirmpassword !== password) {
      success = false;
      errors.confirmpassword = 'Passwords do not match';
    }
    if (!phonenumber.trim()) {
      isValid = false;
      errors.phonenumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phonenumber)) {
      success = false;
      errors.phonenumber = 'Phone number must be 10 digits long';
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

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        const response = await axios.post('http://localhost:8800/signin', {
          name,
          email,
          password,
          confirmpassword,
          phonenumber
        });
        // console.log(name,email,password,confirmpassword,)
        console.log(response.data);
        navigate('/login', { state: { toastMessage: 'Signup Successful!' } });
        // Redirect or handle signup success
      } catch (error) {
        console.error('Signup Error:', error);
        toast.error('Signup Failed. Please try again.');
        // Handle signup error
      }
   } 
    // else {
    //   console.log('Validation failed:', errors);
    //   toast.error('Validation failed. Please check your inputs.');
    // }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <span>or <Link id='signup' onClick={handleloginClick}>Login to your Account</Link></span>
      <form onSubmit={handleSignup}>
        <div className={`sig-form-group ${errors.name ? 'error' : ''}`}>
          <label htmlFor = "name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </div>
        <div className={`sig-form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor = "email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>
        <div className={`sig-form-group ${errors.password ? 'error' : ''}`}>
          <label htmlFor = "password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}
        </div>
        <div className={`sig-form-group ${errors.confirmpassword ? 'error' : ''}`}>
          <label htmlFor = "confirmpassword">Confirm Password</label>
          <input
            id="confirmpassword"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmpassword && <div className="error-text">{errors.confirmpassword}</div>}
        </div>
        <div className={`sig-form-group ${errors.phonenumber ? 'error' : ''}`}>
          <label htmlFor = "phonenumber">Phone Number</label>
          <input
            id="phonenumber"
            type="text"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phonenumber && <div className="error-text">{errors.phonenumber}</div>}
        </div>

        <button className='inside-signin' type="submit">Sign Up</button>
      </form>
      <span className='sig-term'>By clicking on Sign Up, I accept the <Link id='stc'>Terms & Conditions</Link> & <Link id='stc'>Privacy Policy</Link></span>
      <ToastContainer />
    </div>
  );
};

export default Signup;
