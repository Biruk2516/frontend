import React, { useState } from "react";
import { Link } from "react-router-dom";
import eTech from '/eTech.png'
import SearchIcon from '@mui/icons-material/Search';
import './basicStyles/header.css';
export default function Header()
{
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if(searchQuery.trim())
    {
      console.log('searching for \'',searchQuery,'\'');
    }
    setSearchQuery('');
  }
  function handleKeyPress(event)
  {
    if(event.key === 'Enter')
    {
      handleSearch();
    }

  }
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
          <input className="search-input" value={searchQuery} id="searchInput" type="text" placeholder='Search Businesses ' onChange={(e)=>setSearchQuery(e.target.value)} onKeyDown={handleKeyPress} />
          <button className='search-icon' onClick={handleSearch} id="searchButton"><SearchIcon /></button>
        </div>
      
      </header>
    );
}