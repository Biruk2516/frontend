import React,{useRef, useState} from 'react';
import '../Style/SignUpPage.css';
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import { Checkbox } from '@mui/material';
import Validations from '../Validations/Validations.js';


const SignUpPage = () => {

  const [values, setValues] = useState({
    fName:'',
    lName:'',
    userName:'',
    email:'',
    password:'',
    password2:''
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedMessage, setIsCheckedMessage] = useState('')

  function handleChange(event)
  {
    const newValue={...values, [event.target.name]:event.target.value};
    setValues(newValue);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    if (!isChecked) {
      setIsCheckedMessage("You must agree to the terms of service and privacy policy to sign up.");
      //return;
    }
   const emailValidation = Validations.validateEmail(values.email);
   const passwordValidation = Validations.validatePassword(values.password);
   setEmailError(emailValidation);
   setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      // Submit the form or perform any action needed
      console.log(values)
      setValues({
        fName:'',
        lName:'',
        userName:'',
        email:'',
        password:'',
        password2:''
      });
    }
    setIsChecked(false);
  }

  const checkRef=useRef(null);
  const handleCheckboxChange = () => {
    setIsChecked(checkRef.current.checked);
  };

return  (
    <>
    <Link to='/'>
    <img src={eTech} alt="Home" title='Home Page' />
    </Link>
  
    <div className="signup-page">
      <h2>Ready to explore businesses? signup here.</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor='full-name'> Full Name</label><br />
        <div className='names' id='full-name'>
          <input name='fName' value={values.fName} id='f-name' type="text" placeholder="first name..." required onChange={handleChange} />
          <input name='lName' value={values.lName} id='l-name' type="text" placeholder="last name..." required onChange={handleChange} />
        </div>
        <label htmlFor='user-name'>Username</label>
        <input name='userName' value={values.userName} id='user-name' type="text" placeholder="enter username" required onChange={handleChange} />
        <label htmlFor='email'>E-mail</label>
        <input name='email' value={values.email} id='email' type="email" placeholder='email..' required onChange={handleChange} />
               {emailError && <p style={{ color: "red"  ,fontSize:'0.7em'}}>{emailError}</p>}
        <label htmlFor='password'>Password</label>
        <input name='password' value={values.password} id='password' type="password" placeholder='enter password' required onChange={handleChange} />
               {passwordError && <p style={{ color: "red"  ,fontSize:'0.7em'}}>{passwordError}</p>}
        <label htmlFor='password2'>Re-enter Password</label>
        <input name='password2' value={values.password2} id='password2' type="password" placeholder='re-enter password' required onChange={handleChange} />
        <div className='policy'>
          <input type='checkbox' ref={checkRef}  onChange={handleCheckboxChange} />I agree with 'webName'<a href="#">Terms of service.</a><a href="#">Privacy Policy.</a>
        </div>
         <p style={{color:'red', fofntSize:'0.6em'}}>{isCheckedMessage}</p>
        <button className='signup-button' type="submit">Sign Up</button>
      </form>
      <pre>Already have an account? <Link to="/login">Log In</Link></pre> 
    </div>
    </>
  );
};

export default SignUpPage;
