import React from "react";
import BusinessList from "./BusinessList";
import businesses from "./businesses";
import { Link } from "react-router-dom";
import Header from "../Basics/Header";
import eTech from '/eTech.png'
import grinch from '/Grinch.png'
import emoji from '/emoji.jpg'
import Footer from "../Basics/Footer";
import HomeIcon from '@mui/icons-material/Home';
import '../ComponentStyles/Business.css';


function BusinessDisplay()
{

  function handleClick(item)
  {
    console.log('you clicked',item);
  }
    return (
        <div className='business-display'>
          <Header />
          <div className='all-business-navs'>
            <p><Link to='/'><HomeIcon /><p>Home</p></Link></p>
          </div>
          <h2>Here are a lot of businesses that you might be interested in  ......  take a look </h2>
          <div className="advertisment" style={{backgroundColor:'hsl(240, 84%, 24%)',height:"820px",float:'left',width:'250px',marginLeft:'10px',borderRadius:'5px'}}>
              <marquee style={{height:'280px',backgroundColor:'hsl(195, 53%, 90%)'}}  behavior="" direction="up">
                <img src={eTech} alt="" />
                <h2>eTech software company</h2> <p>the best local software company you are looking for</p></marquee>
              <marquee style={{height:'280px',backgroundColor:'hsl(195, 53%, 90%)',marginTop:'10px'}}  behavior="" direction="down"><img src={emoji} alt="" />Advertisment here...</marquee>
              <marquee style={{height:'225px',backgroundColor:'hsl(195, 53%, 90%)',marginTop:'10px'}}  behavior="" direction="down"><img src={grinch} alt="" />Advertisment here...</marquee>
          </div>
          <div className='businesses'>
            <BusinessList onClick={handleClick} business={businesses} />
            <p style={{margin:'10px'}}><a href="#">see more...</a></p>
          </div> 
          <div className="display-footer"><Footer /></div>
        </div>
    );
}

export default BusinessDisplay;