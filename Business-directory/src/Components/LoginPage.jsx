import React, { useEffect, useState } from 'react';
import '../Style/LoginPage.css'
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'

const LoginPage = () => {


  return  (
    <>
    <Link to='/'>
       <img src={eTech} alt="Home" title='Home' />
    </Link>
    
    <div className="login-page">
      <h2>Log In</h2>
      <form onSubmit='#'>
        <label htmlFor='email'>Username</label><input id='email' type="text/email" placeholder="Username or E-mail" required />
        <label htmlFor='password'>Password</label><input id='password' type="password" placeholder="Password" required />
         
        <button className='button' type="submit">Log In</button>
      </form>
      <pre>Forget password! <a href="#">help</a></pre>
        or
        <pre>Create account    <Link to="/signup">Sign Up</Link></pre>
    </div>
    </>
  );
};

export default LoginPage;
