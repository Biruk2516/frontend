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
import BusinessList from '../Components/BusinessList';
import eTech from '/eTech.png'
import Book from '@mui/icons-material/BookTwoTone'
import Cars from '@mui/icons-material/CarRepair'
import GamesRoundes  from '@mui/icons-material/GamesRounded'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import businesses from './businesses';
import SearchIcon from '@mui/icons-material/Search';
import AllNavs from './NavBar/AllNavs';
import AllBusinesses from '../Components/AllBusinesses';
import DisplayAll from '../Components/DisplayAll';
import PostBusiness from './Post/PostBusiness';
export const UserContext=createContext();

function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newBusiness, setNewBusiness] = useState(false);
  const [displayAll, setDisplayAll] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDisplayAll(true);
  };

  const filteredBusinesses = selectedCategory
  ? businesses.filter(b => b.category === selectedCategory)
  : businesses;


  function handleTakeHome()
  {
    setDisplayAll(false);
  }
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
      <div className='marquee'>
        <marquee behavior="" direction="left"><img style={{maxHeight:'40px'}} src="/eTech.png" alt="" />Advertisment here...</marquee>
      </div>

      <div className='main-content'>
      <div className='elements'>
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
          </select> */}
        </div>
        <div className='navigations'>
              <AllNavs onClick={handleTakeHome} className='navs' openDialog={() => setNewBusiness(true)} />
        </div>
        
        <PostBusiness openIt={newBusiness} closeDialog={()=> setNewBusiness(false)} />
        <div className='businesses'>
        <BusinessList business={ displayAll ? filteredBusinesses : AllBusinesses} />
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
  );
};

export default LandingPage; 
// <div className='marquee'><marquee behavior="" direction="">Business</marquee></div>
