import React,{useState} from 'react';
import '../Style/SignUpPage.css';
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import LandingPage from './LandingPage';

const SignUpPage = () => {

  const [isClicked, setIsClicked] = useState(false);
  function handleClick()
  {
    setIsClicked(true);
  }
  
  return isClicked ? <LandingPage /> : (
    <>
   <img onClick={handleClick} src={eTech} alt="Home" title='Home' />
    <div className="signup-page">
      <h2>Ready to explore businesses?</h2>
      <form>
      <label htmlFor='l-name'> Full Name</label><br />
        <div className='names'>
          
          <input id='f-name' type="text" placeholder="first name..." required />
          <input id='l-name' type="text" placeholder="last name..." required />
        </div>
        <p>Username</p><input id='user-name' type="text" placeholder="enter username" required />
        <p>E-mail</p><input type="email" placeholder='email..' required />
        <p>Password</p><input type="password" placeholder='enter password' required />
        <p>Re-enter Password</p><input type="password" placeholder='re-enter password' required />
        <button className='signup-button' type="submit">Sign Up</button>
      </form>
      <pre>Already have an account? <Link to="/login">Log In</Link></pre> 
    </div>
    </>
  );
};

export default SignUpPage;
