import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function AllNavs(props)
{
    return (
        <Box className={props.className}>
            <Grid container direction={props.direction1}>
                <Grid display='flex' item container xs={1} direction={props.direction2}>
                    <Button component={Link} to='/'>
                        <h3 onClick={props.onClick}>Home</h3></Button>
                    <Button
                        component={Link}
                        to="/businesses"
                    >
                        <h3>Businesses</h3>
                    </Button>
                    <Button component={Link} to='/postBusiness'><h3>Post Business</h3></Button>
                    <Button><h3>Contacts</h3></Button>
                    <Button><h3>Services</h3></Button>
                    <Button><h3>About Us</h3></Button>
                    <Button><h3>SETTINGS</h3></Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AllNavs;