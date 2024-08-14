import React,{useState,createContext} from 'react';
import '../Style/LandingPage.css';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BusinessList from '../Components/Businesses/BusinessList';
import Book from '@mui/icons-material/BookTwoTone'
import Cars from '@mui/icons-material/CarRepair'
import GamesRoundes  from '@mui/icons-material/GamesRounded'
import businesses from '../Components/Businesses/businesses';
import AllNavs from '../Components/NavBar/AllNavs';
import AllBusinesses from '../Components/Businesses/AllBusinesses';
import PostBusiness from '../Components/Post/PostBusiness';
import Header from '../Components/Basics/Header';
import Footer from '../Components/Basics/Footer';

function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  function handleClick()
  {
    console.log("Clicked")
  }
  return (

    <div className='landing'>
      <Header />
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
            <p onClick={() => handleCategoryClick('*')}><MoreVertIcon /></p>
          </div>
        
          <div className='navigations'>
                <AllNavs onClick={handleTakeHome} direction1='column' direction2='column' />
          </div>
          <div className='businesses' onClick={handleClick}>
          <BusinessList business={ displayAll ? filteredBusinesses : AllBusinesses} />
          </div> 
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage; 
// <div className='marquee'><marquee behavior="" direction="">Business</marquee></div>
