import React from "react";
import { Link } from "react-router-dom";
import eTech from '/eTech.png'
import SearchIcon from '@mui/icons-material/Search';
import '../ComponentStyles/header.css';
export default function Header()
{
    return (
        <header>
        <Link to='/' >
          <img src={eTech} alt="Home" title='Home Page' />
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
    );
}