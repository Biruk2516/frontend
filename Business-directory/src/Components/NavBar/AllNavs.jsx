import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Setting from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/Man';

function AllNavs(props)
{
    return (
        <Box className={props.className}> 
            <Grid container direction={props.direction1}>
                <Grid display='flex' item container xs={1} direction={props.direction2}>
                <Button component={Link} to='/'>
                    <h3 onClick={props.onClick}><HomeIcon />Home</h3>
                </Button>
                <Button component={Link} to="/businesses">
                    <h3>Businesses</h3>
                </Button>
                <Button component={Link} to='/postBusiness'>
                    <h3>Post Business</h3>
                </Button>
                <Button component={Link} to='/profilePage'>
                    <h3><Profile />Profile</h3>
                </Button>
                <Button component={Link} to='/servicePage'>
                    <h3>Services</h3>
                </Button>
                <Button component={Link} to='/aboutUsPage'>
                    <h3>About Us</h3>
                </Button>
                <Button component={Link} to='/settingPage'>
                    <h3><Setting />Settings</h3>
                </Button>
                <ul>
                    <li><Button>something</Button></li>
                    <li><Button>something</Button></li>
                    <li><Button>something</Button></li>
                </ul>
                <Button component={Link} to='/servicePage'>
                    <h3>Services</h3>
                </Button>
                <Button component={Link} to='/aboutUsPage'>
                    <h3>About Us</h3>
                </Button>
                <Button component={Link} to='/settingPage'>
                    <h3><Setting />SETTINGS</h3>
                </Button>
                <ul>
                    <li><Button>something</Button></li>
                    <li><Button>something</Button></li>
                    <li><Button>something</Button></li>
                </ul>
                </Grid>
            </Grid>
        </Box>

    );
}

export default AllNavs;