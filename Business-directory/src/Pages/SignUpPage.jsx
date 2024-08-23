import React,{useRef, useState} from 'react';
import '../Style/SignUpPage.css';
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import Validations from '../Validations/Validations.js';
import VisibilityOffRounded  from '@mui/icons-material/VisibilityOffRounded.js'
import VisiblityOnRounded from '@mui/icons-material/VisibilityRounded.js'

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
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedMessage, setIsCheckedMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const checkRef=useRef(null);
  const handleCheckboxChange = () => {
    setIsChecked(checkRef.current.checked);
  };


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
   const userNameValidation = Validations.validateuserName(values.userName);
   setEmailError(emailValidation);
   setPasswordError(passwordValidation);
   setUserNameError(userNameValidation);

    if (!emailValidation && !passwordValidation && !userNameError) {
      // Submit the form or perform any action needed
      
       if(values.password === values.password2)
       {
        if (!isChecked) {
          setIsCheckedMessage("You must agree to the terms of service and privacy policy to sign up.");
          return;
         }
         cleaning();
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
       else {
        setPasswordMatch('the password doesn\'t match')
       }
       
    }
  }

  function cleaning()
  {
    setIsChecked(false);
    checkRef.current.checked= false;
    setIsCheckedMessage('');
    setEmailError('');
    setPasswordError('');
    setPasswordMatch('');
    setUserNameError('');
    setIsPasswordVisible(false);
  }



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
              {userNameError && <p style={{ color: "red"  ,fontSize:'0.7em'}}>{userNameError}</p>}
        <label htmlFor='email'>E-mail</label>
          <input name='email' value={values.email} id='email' type="email" placeholder='email..' required onChange={handleChange} />
                {emailError && <p style={{ color: "red"  ,fontSize:'0.7em'}}>{emailError}</p>}
        <label htmlFor='password'>Password</label>
          <div className='password'>
              <input name='password' value={values.password} id='password' type={isPasswordVisible ? 'text': 'password'}
                                            placeholder='enter password' required onChange={handleChange} />
                    <button type='button' onClick={() =>  setIsPasswordVisible(!isPasswordVisible)} className='toggle-button'>
                            {isPasswordVisible? <VisiblityOnRounded /> :<VisibilityOffRounded />}</button>
          </div>
                {passwordError && <p style={{ color: "red"  ,fontSize:'0.7em'}}>{passwordError}</p>}
        <label htmlFor='password2'>Re-enter Password</label>
          <input name='password2' value={values.password2} id='password2' type={isPasswordVisible ? 'text': 'password'} placeholder='re-enter password' required onChange={handleChange} />
                  <p style={{color:'red', fontSize:'0.7em'}}>&nbsp;&nbsp;&nbsp;{passwordMatch}</p>
        <div className='policy'>
          <input type='checkbox' ref={checkRef}  onChange={handleCheckboxChange} />&nbsp;&nbsp;By signing up, you agree to our <a href="#">Terms of service</a> and <a href="#">Privacy Policy.</a> You will be sent a single email to verify your account.
        </div>
        <p style={{color:'red', fofntSize:'0.5em'}}>&nbsp;&nbsp;&nbsp;{isCheckedMessage}</p>
        <button  className='signup-button' type="submit">Sign Up</button>
      </form>
      <pre>Already have an account? <Link to="/login">Log In</Link></pre> 
    </div>
  </>
  );
};

export default SignUpPage;
