import React, { useEffect, useState } from 'react';
import '../Style/LoginPage.css'
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import Inputs from '../Components/Basics/Inputs';
import Validations from '../Validations/Validations.js';

const LoginPage = () => {

  const [values, setValues] = useState({
    email:'',
    password:''
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      alert("Form submitted successfully!");
      setValues(  {email:'',  password:''}  )
    }
  }

  return  (
    <>
    <Link to='/'>
       <img src={eTech} alt="Home" title='Home Page' />
    </Link>
    
    <div className="login-page">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Username</label>
        <Inputs name='email' value={values.email} 
                            id='email' type="email" placeholder="E-mail" onChange={handleChange}  />
                   {emailError && <p style={{ color: "red"  ,fontSize:'0.8em'}}>{emailError}</p>}
        <label htmlFor='password'>Password</label>
        <Inputs name='password' value={values.password} 
                                id='password' type="password" placeholder="Password" onChange={handleChange}  />
                    {passwordError && <p style={{ color: "red" ,fontSize:'0.8em'}}>{passwordError}</p>}
        <button className='button' type='submit'>Log In</button>
      </form>
      <pre>Forget password! <a href="#">help</a></pre>
        or
      <pre>Create account    <Link to="/signup">Sign Up</Link></pre>
    </div>
    </>
  );
};

export default LoginPage;
