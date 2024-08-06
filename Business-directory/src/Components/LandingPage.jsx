import React,{useState,createContext} from 'react';
import '../Style/LandingPage.css';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BusinessList from './BusinessList';
import eTech from '/eTech.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import businesses from './businesses';
import SearchIcon from '@mui/icons-material/Search';
import AllNavs from './NavBar/AllNavs';

export const UserContext=createContext();

function LandingPage() {

  const isClicked = true;
  return isClicked ? (

    <div className='landing'>
      <header>
        <img src={eTech} alt="" />
        <Link className='sign-button' to="/signup">Sign Up</Link>
      <Link className='log-button' to="/login">Log In</Link>
      <h2>Discover Local businesses and services at your fingertips</h2>
      <p>Explore More....</p>
      
      <div className='search-inputs'>
        <input type="text" placeholder='Search Businesses '/>
        <button><SearchIcon /></button>
        </div>
      
      </header>
    <div className='marquee'><marquee behavior="" direction="left">Advertisment here..</marquee></div>

      <div className='main-content'>
        <div className='navigations'>
              <AllNavs  />
        </div>
        <div className='elements'>
          <p><RestaurantIcon /> restaurant  </p>
          <p><HomeIcon /> Real Estate</p>
          <p><ComputerIcon /> Technology</p>
          <p><AddShoppingCartIcon /> Shopping</p>
          <p><LocalHospitalIcon /> Hospital</p>
          <p><LocalPharmacyIcon /> Pharmacy</p>
          <p><MoreVertIcon /> More...</p>
        </div>
        <div className='businesses'>
        <BusinessList businesses={businesses} />
        </div> 
      </div>
      <footer>
        <div className='footer-icons'>
          <a href="https://www.facebook.com" title='facebook'><FacebookIcon /></a>&nbsp;&nbsp; <a href="https://www.instagram.com" title='instagram'><InstagramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.telegram.com" title='telegram'><TelegramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.twitter.com" title='twitter'><TwitterIcon /></a> &nbsp;&nbsp; <a href="https://www.email.com" title='email'><EmailIcon /></a>
        </div>
        <p>&copy; &nbsp;eTech  {new Date().getFullYear()}</p>
      </footer>
    </div>
  ): null;
};

export default LandingPage; 
// <div className='marquee'><marquee behavior="" direction="">Business</marquee></div>
