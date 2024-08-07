import React,{useState} from 'react';
import '../Style/SignUpPage.css';
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const SignUpPage = () => {

  
return  (
    <>
    <Link to='/'>
    <img src={eTech} alt="Home" title='Home' />
    </Link>
  
    <div className="signup-page">
      <h2>Ready to explore businesses? signup here.</h2>
      <form>
      <label htmlFor='l-name'> Full Name</label><br />
        <div className='names'>
          
          <input id='f-name' type="text" placeholder="first name..." required />
          <input id='l-name' type="text" placeholder="last name..." required />
        </div>
        <label htmlFor='user-name'>Username</label>
        <input id='user-name' type="text" placeholder="enter username" required />
        <label htmlFor='email'>E-mail</label>
        <input id='email' type="email" placeholder='email..' required />
        <label htmlFor='password'>Password</label>
        <input id='password' type="password" placeholder='enter password' required />
        <label htmlFor='password'>Re-enter Password</label>
        <input id='password' type="password" placeholder='re-enter password' required />
        <button className='signup-button' type="submit">Sign Up</button>
      </form>
      <pre>Already have an account? <Link to="/login">Log In</Link></pre> 
    </div>
    </>
  );
};

export default SignUpPage;
