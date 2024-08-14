import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './styles/postform1.css'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography,Button } from "@mui/material";

export default function PostForm1()
{
    let businessGeneral = {
        id:Date.now(),
        name: '',
        businessType:'',
        description: '',
        image: '',
        category:'',
        link:'',
}

    const [selected,setSelected] = useState('');
    const [generalBusiness, setGeneralBusiness] = useState(businessGeneral);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, like saving data or sending it to a server
       setGeneralBusiness( businessGeneral= {
            name: '',
            description: '',
            image: '',
            businessType:'',
            link: '',
            category:'',
            city:''
        })
        console.log(generalBusiness);
    }
    const handleChange1 = (e) => {
        setGeneralBusiness({...generalBusiness, [e.target.name]: e.target.value });
    }
    return(
        <form onSubmit={handleSubmit} className="general-form">
                 <Box>
            <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Name:
                        <FilledInput placeholder="Owner Name *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        Category:
                        <Select disableUnderline variant="filled" defaultValue='Hospital *' fullWidth>
                            <MenuItem value="Hospital">Hospital</MenuItem>
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Technology">Technology</MenuItem>
                            <MenuItem value="RealState">Real State</MenuItem>
                            <MenuItem value="Pharmacy">Pharmacy</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        Country:
                    <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                searchable
                                placeholder='Select Country'
                                searchPlaceholder='search countries'
                            />
                    </Grid>
                    <Grid item xs={6}>
                        City:
                    <Select disableUnderline variant="filled" defaultValue='City *' fullWidth>
                            <MenuItem value="City *">Hospital</MenuItem>
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Technology">Technology</MenuItem>
                            <MenuItem value="RealState">Real State</MenuItem>
                            <MenuItem value="Pharmacy">Pharmacy</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        Sub-City:
                        <FilledInput placeholder="sub city" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        Street-Name:
                        <FilledInput placeholder="street name" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        image url:
                        <FilledInput placeholder="Image url *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        website link:
                        <FilledInput placeholder="website link" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        Description:
                        <FilledInput placeholder="description" disableUnderline fullWidth />
                    </Grid>
                    
                </Grid>
            </Box>
                </form>
    );
}

/*
/*  */
 /*
 <div className="inputs">
                        <label>Business Name:</label>
                        <input
                            name='name'
                            type="text"
                            value={generalBusiness.name}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>Category:</label>
                        <input
                            type="text"
                            name='category'
                            value={generalBusiness.category}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <div className="inputs">
                    <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                searchable
                                placeholder='Select Country'
                                searchPlaceholder='search countries'
                            />
                    </div>
                    <div className="inputs">
                        <label>Business Type:</label>
                        <input
                            type="text"
                            name='businessType'
                            value={generalBusiness.businessType}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>image url:</label>
                        <input
                            type="text"
                            name='image'
                            value={generalBusiness.image}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>Description:</label>
                        <textarea
                            name='description'
                            value={generalBusiness.description}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <div className="inputs">
                        <label>website</label>
                        <input
                            type="text"
                            name='link'
                            value={generalBusiness.link}
                            onChange={handleChange1}
                            required
                        />
                    </div>
                    <button className="post-submit-button" type="submit">Submit</button>
  
 */