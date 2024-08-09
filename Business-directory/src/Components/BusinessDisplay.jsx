import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import eTech from '/eTech.png';
import BusinessList from "./BusinessList";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import businesses from "./businesses";
function BusinessDisplay()
{
    return (
        <div className='landing'>
            <header>
            <Link to='/' >
                <img src={eTech} alt="Home" title='Home' />
            </Link>
            <Link className='sign-button' to="/signup">Sign Up</Link>
            <Link className='log-button' to="/login">Log In</Link>
            <h2>Discover Local businesses and services at your fingertips</h2>
            <p>Explore More....</p>
            
            <div className='search-inputs'>
                <input type="text" placeholder='Search Businesses '/>
                <button className='search-icon'><SearchIcon /></button>
            </div>
            
            </header>
            {/* <div className='elements'>
      <p onClick={() => handleCategoryClick('restaurant')}><RestaurantIcon /> Restaurant</p>
          <p onClick={() => handleCategoryClick('real-estate')}><HomeIcon /> Real Estate</p>
          <p onClick={() => handleCategoryClick('technology')}><ComputerIcon /> Technology</p>
          <p onClick={() => handleCategoryClick('markets')}><AddShoppingCartIcon /> Shopping</p>
          <p onClick={() => handleCategoryClick('hospitals')}><LocalHospitalIcon /> Hospital</p>
          <p onClick={() => handleCategoryClick('pharmacy')}><LocalPharmacyIcon /> Pharmacy</p>
          <p onClick={() => handleCategoryClick('bookstore')}><Book /> BookStore</p>
          <p onClick={() => handleCategoryClick('games')}><GamesRoundes /> Gaming</p>
          <p onClick={() => handleCategoryClick('cars')}><Cars /> Car Repair</p>
          <p><Book /> BookStore</p>
          <p><GamesRoundes /> Gaming</p>
          <p><Cars /> Car Repair</p>
          <p onClick={() => handleCategoryClick('more')}><MoreVertIcon /></p>
          {/* <select defaultValue={'More'+<MoreVertIcon />}>
          <option value={<FacebookIcon />}>BookStore</option>
          <option value={<FacebookIcon />}>Library</option>
          <option value={<FacebookIcon />}>MoveStore</option>
          </select> 
        </div> */}
        <h2>Here are a lot of businesses that you might be interested in take a look </h2>
        <div className='businesses'>
        <BusinessList business={businesses} />
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
    );
}

export default BusinessDisplay;