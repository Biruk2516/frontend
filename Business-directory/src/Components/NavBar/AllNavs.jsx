import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Setting from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/Man';
import './navigation.css'
function AllNavs(props)
{
    return (
        <Box className='navigations'> 
            <Grid container direction={props.direction1}>
                <Grid display='flex' item container xs={1} direction={props.direction2}>
                    <Link className="link" to='/'><h3 onClick={props.onClick}>Ho<HomeIcon />me</h3></Link>
                    <Link className="link" to='businesses'><h3>Businesses</h3></Link>
                    <Link className="link" to='/postBusiness'><h3>Post Business</h3></Link>
                    <Link className="link" to='/profilePage'><h3><Profile />Profile</h3></Link>
                    <Link className="link" to='/servicePage'><h3>Services</h3></Link>
                    <Link className="link" to='/aboutUsPage'><h3>About Us</h3></Link>
                    <Link className="link" to='/settingPage'><h3><Setting />Settings</h3></Link>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>
                    <Link className="link" to='/servicePage'><h3>Services</h3></Link>
                    <Link className="link" > <h3>About Us</h3></Link>
                    <ul>
                        <li>something</li>
                        <li>something</li>
                        <li>something</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>

    );
}

export default AllNavs;