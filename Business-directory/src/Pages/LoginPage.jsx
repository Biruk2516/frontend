import React, { useEffect, useState } from 'react';
import '../Style/LoginPage.css'
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import Validations from '../Validations/Validations.js';
import VisibilityOffRounded  from '@mui/icons-material/VisibilityOffRounded.js'
import VisiblityOnRounded from '@mui/icons-material/VisibilityRounded.js'
import Facebook from '@mui/icons-material/Facebook.js';
import GoogleIcon  from '@mui/icons-material/Google.js';
import { IconButton } from '@mui/material';
import Footer from '../Components/Basics/Footer.jsx';

const LoginPage = () => {

  const [values, setValues] = useState({
    email:'',
    password:''
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleChange(event)
  {
    const newValue={...values, [event.target.name]:event.target.value};
    setValues(newValue);
  }

  function handleSubmit(event)
  {
   event.preventDefault();
   const emailValidation = Validations.validateEmail(values.email);
   const passwordValidation = Validations.validatePassword(values.password);
   setEmailError(emailValidation);
   setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      // Submit the form or perform any action needed
      console.log(values)
      alert("Form submitted successfully!");
      setValues(  {email:'',  password:''}  )
      setIsPasswordVisible(false);
    }
  }

  return  (
    <div className="login-page">
    <Link to='/'>
       <img src={eTech} alt="Home" title='Home Page' />
    </Link>
    
    
      <h2>Log In here</h2>
      <div className='login-options'>
        <h3><a href="https://www.facebook.com" target='_blank'><IconButton sx={{color:'rgb(24, 119, 242)'}}><Facebook  /></IconButton>&nbsp;continue with facebook</a></h3>
        <h3><a href="https://www.google.com" target='_blank'><IconButton sx={{color:'brown'}}><GoogleIcon /></IconButton>&nbsp;continue with google</a></h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input name='email' value={values.email} 
                            id='email' type="email" placeholder="E-mail" onChange={handleChange} required />
                   {emailError && <p style={{ color: "red"  ,fontSize:'0.8em'}}>{emailError}</p>}
        <label htmlFor='password'>Password</label>
        <div className='password'><input name='password' value={values.password} id='password' type={isPasswordVisible ? 'text': 'password'} 
                                  placeholder='enter password' required onChange={handleChange} />
                                  <button type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='toggle-button'>
                                    {isPasswordVisible? <VisiblityOnRounded /> :<VisibilityOffRounded />}</button>
        </div>
           {passwordError && <p style={{ color: "red" ,fontSize:'0.8em'}}>{passwordError}</p>}
        <button className='button' type='submit'>Log In</button>
      </form>
      <pre>Forget password! <Link to='/settingPage'>help</Link></pre>
        or
      <pre>Create account    <Link to="/signup">Sign Up</Link></pre>
    </div>
    
  );
};

export default LoginPage;
