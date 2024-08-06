import React from "react";
import LandingPage from "../LandingPage";

function AllNavs()
{
    function goHome()
    {
        return <LandingPage />
    }

    return (<div className='menu'>
        <h3>Home</h3>
        <h3>Businesses</h3>
        <h3>Post Business</h3>
        <h3>Contacts</h3>  
        <h3>Services</h3>
        <h3>About us</h3>
    </div>);
}

export default AllNavs;