import React from "react";
import LandingPage from "../LandingPage";
import { Link } from "react-router-dom";
import BusinessCard from "../BusinessCard";
import AllBusinesses from '../AllBusinesses.js'
import { Button,Select,MenuItem } from "@mui/material";

function AllNavs(props)
{

    function contactInfo()
    {
        return (
            <div style={backgroundColor='red' }>holla</div>
        )
    }
 return (
    <div className='menu'>
        <h3>HOME</h3>
        <h3>BUSINESSES</h3>
        <h3>POST BUSINESS</h3>
        <h3>CONTACTS</h3>  
        <h3>SERVICES</h3>
        <h3>ABOUT US</h3>
        <h3>STH</h3>  
        <h3>STH</h3>
        <h3>STh US</h3>
    </div>);
}

export default AllNavs;