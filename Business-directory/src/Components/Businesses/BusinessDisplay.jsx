import React from "react";
import BusinessList from "./BusinessList";
import businesses from "./businesses";
import AllNavs from "../NavBar/AllNavs";
import '../ComponentStyles/BusinessCard.css';
import Header from "../Basics/Header";
import Footer from "../Basics/Footer";
function BusinessDisplay()
{
    return (
        <div className='landing'>
          <Header />
          <div className='all-business-navs'>
            <AllNavs   direction1='column' direction2='row' />
          </div>
          <marquee behavior="" direction="left">Advertisment here...</marquee>
          <h2>Here are a lot of businesses that you might be interested  ......  in take a look </h2>
          <div className='businesses'>
            <BusinessList business={businesses} />
          </div> 
          <Footer />
        </div>
    );
}

export default BusinessDisplay;