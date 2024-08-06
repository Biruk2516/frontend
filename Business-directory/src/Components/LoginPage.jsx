import React, { useEffect, useState } from 'react';
import '../Style/LoginPage.css'
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LandingPage from './LandingPage';

const LoginPage = () => {

  const [isClicked, setIsClicked] = useState(false);
  function handleClick()
  {
    setIsClicked(true);
  }

   return isClicked ? <LandingPage /> : (
    <>
    <img onClick={handleClick} src={eTech} alt="Home" title='Home' />
    <div className="login-page">
      <h2>Log In</h2>
      <form>
       <div></div> <p>Username</p><input type="text/email" placeholder="Username or E-mail" required />
       <p>Password</p><input type="password" placeholder="Password" required />
        <button className='button' type="submit">Log In</button>
        <pre>or</pre>
        <pre>Create account    <Link to="/signup">Sign Up</Link></pre>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
