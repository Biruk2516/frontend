import React from "react";
import AllBusinesses from "./AllBusinesses";
import BusinessCard from "./BusinessCard";
import { Grid,Button, Box } from "@mui/material";
import businesses from "./businesses";

function DisplayAll({ name, description, image, link })
{
    return (
        <Box display='flex' justifyContent='center' style={styles.list}>
            <Grid d>
                {AllBusinesses.map((business,index) => {
                    <BusinessCard key={index}
                            name={business.name}
                            description={business.description}
                            image={business.image}
                            link={business.link} />
                })}
            </Grid>
            </Box>
    )
}

const styles = {
    list: {
    // //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'center',
      textDecoration:'none'
    },
  };
export default DisplayAll;