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
                </form>
    );
}

/*
/*  */
 /*
 <Box  fullWidth fullScreen m={4} display='flex' justifyContent='space-between' alignItems='center'>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        {/* <button onClick={handleFocus}>click</button> 
                        <FilledInput  placeholder="Owner Name *" disableUnderline fullWidth required />
                    </Grid>
                    <Grid item xs={6}>
                        <Select disableUnderline variant="filled"  defaultValue="Business Categories *" fullWidth>
                            <MenuItem value='Business Categories *'>Business Categories *</MenuItem>
                            <MenuItem value="Hospital">Hospital</MenuItem>
                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                            <MenuItem value="Technology">Technology</MenuItem>
                            <MenuItem value="RealState">Real State</MenuItem>
                            <MenuItem value="Pharmacy">Pharmacy</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput   placeholder="Business Title *" disableUnderline fullWidth required />
                    </Grid>
                    <Grid item xs={6}>
                    <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                                searchable
                                placeholder='Select Country'
                                searchPlaceholder='search countries'
                            />
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput  placeholder="Something" disableUnderline fullWidth required />
                    </Grid>
                    <Grid item xs={3} >
                    <Select disableUnderline variant="filled" defaultValue='City *'   fullWidth>
                            <MenuItem value='City *'>City *</MenuItem>
                            <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
                            <MenuItem value="Hawassa">Hawassa</MenuItem>
                            <MenuItem value="Gondar">Gondar</MenuItem>
                            <MenuItem value="Bahirdar">Bahirdar</MenuItem>
                            <MenuItem value="Dire Dawa">Dire Dawa</MenuItem>
                            <MenuItem value="Mekelle">Mekelle</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={3} >
                    <Select disableUnderline variant="filled" defaultValue='City.2'   fullWidth>
                            <MenuItem value='City.2'>City.2</MenuItem>
                            <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
                            <MenuItem value="Hawassa">Hawassa</MenuItem>
                            <MenuItem value="Gondar">Gondar</MenuItem>
                            <MenuItem value="Bahirdar">Bahirdar</MenuItem>
                            <MenuItem value="Dire Dawa">Dire Dawa</MenuItem>
                            <MenuItem value="Mekelle">Mekelle</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput   placeholder="Something" disableUnderline fullWidth required />
                    </Grid>
                    <Grid item xs={3} >
                    <Select disableUnderline variant="filled" defaultValue='Sub City *'   fullWidth>
                            <MenuItem value='Sub City *'>Sub City *</MenuItem>
                            <MenuItem value="Bole">Bole</MenuItem>
                            <MenuItem value="Yeka">Yeka</MenuItem>
                            <MenuItem value="Lideta">Lideta</MenuItem>
                            <MenuItem value="Akaki-Kaliti">Akaki-Kaliti</MenuItem>
                            <MenuItem value="Kirkos">Kirkos</MenuItem>
                            <MenuItem value="Arada">Arada</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={3} >
                    <Select disableUnderline variant="filled" defaultValue='Sub City.2'   fullWidth>
                            <MenuItem value='Sub City.2'>Sub City.2</MenuItem>
                            <MenuItem value="Yeka">Yeka</MenuItem>
                            <MenuItem value="Arada">Arada</MenuItem>
                            <MenuItem value="Lideta">Lideta</MenuItem>
                            <MenuItem value="Akaki-Kaliti">Akaki-Kaliti</MenuItem>
                            <MenuItem value="Bole">Bole</MenuItem>
                            <MenuItem value="Kirkos">Kirkos</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput  placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput  placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={12} >
                        <FilledInput placeholder="Description *" disableUnderline fullWidth multiline rows={4} required />
                    </Grid>
                    </Grid>
                </Box> 
 */