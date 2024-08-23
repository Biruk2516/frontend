import React from "react";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";
import grinch from '/Grinch.png'
export default function BusinessDescription(props)
{
    return (
        <Dialog open={props.openIt} fullWidth m={4}>
            <div>
                <button onClick={props.closeIt}>x</button>
                <div>
                    <img src={grinch} alt="" />
                    <h2>Businesss name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi impedit est earum minima reprehenderit molestiae iste commodi, labore perferendis debitis delectus eveniet? Tempore quis totam repellendus incidunt explicabo impedit minus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus accusantium quibusdam dolorum sapiente architecto debitis facere vero placeat, ducimus distinctio corporis, quia optio provident alias tempore illo deserunt voluptatem?</p>
                </div>
            </div>
        </Dialog>
    );
}