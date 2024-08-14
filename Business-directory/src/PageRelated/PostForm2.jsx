import React,{useState} from "react";
import './styles/postform2.css';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography,Button } from "@mui/material";


export default function PostForm2()
{
   
    let businessAddress ={
        city:'',
        subCity:'',
        streetName:'',
    }   
   let phoneNumber = {
        ownerPhone:'',
        businessPhone:''
    }
    let  socialMedia = {
        email:'',
        webLink: '',
        facebookLink:'',
        tiktokLink:'',
        otherLink:''
    }  
    let  times = {
            dateEstablished:'',
            openDays:'',
            openHours:''
        }
    
   

    const [address, setAddress] = useState(businessAddress);
    const [phone, setPhone] = useState(phoneNumber);
    const [medias, setMedias] = useState(socialMedia);
    const [time, setTimes] = useState(times);


    const handleSubmit = (e) => {

        e.preventDefault();
        setAddress({
            city:'',
            subCity:'',
            streetName:'',
        })
        setPhone({
            ownerPhone:'',
            businessPhone:''
        })
        setMedias({
            email:'',
            webLink: '',
            facebookLink:'',
            tiktokLink:'',
            otherLink:''
        })
        setTimes({
            dateEstablished:'',
            openDays:'',
            openHours:''
        })
        console.log({address,phone,medias,time});
    };


    const handleChange2 = (e) => {
        setAddress({...address,[e.target.name]:e.target.value})
    }
    const handleChange3 = (e) => {
        setPhone({...phone,[e.target.name]:e.target.value})
    }
    const handleChange4 = (e) => {
        setMedias({...medias,[e.target.name]:e.target.value})
    }
    const handleChange5 = (e) => {
        setTimes({...time,[e.target.name]:e.target.value})
    }



    return (
        <form onSubmit={handleSubmit} className="specific-form">
            <Box>
            <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Owner Name *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
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
                        <FilledInput placeholder="Business Title *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Address *" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder="Description *" disableUnderline fullWidth multiline rows={4} />
                    </Grid>
                </Grid>
            </Box>
                    
        </form>
    );
}

/*
<div>
                        <label>City:</label>
                        <input
                            name='city'
                            type="text"
                            value={address.city}
                            onChange={handleChange2}
                            required
                        />
                    </div>
                    <div>
                        <label>sub-City:</label>
                        <input
                            type="text"
                            name='subCity'
                            value={address.subCity}
                            onChange={handleChange2}
                            required
                        />
                    </div>
                    <div>
                    <label>street name:</label>
                        <input
                            type="text"
                            name='streetName'
                            value={address.streetName}
                            onChange={handleChange2}
                            required
                        />
                    </div>
                    <div>
                        <label>Owner's Phone:</label>
                        <input
                            type="text"
                            name='ownerPhone'
                            value={phone.ownerPhone}
                            onChange={handleChange3}
                            required
                        />
                    </div>
                    <div>
                        <label>Business Phone:</label>
                        <input
                            type="text"
                            name='businessPhone'
                            value={phone.businessPhone}
                            onChange={handleChange3}
                            required
                        />
                    </div>
                    <div>
                        <label>Website link:</label>
                        <input
                            type='text'
                            name='webLink'
                            value={medias.webLink}
                            onChange={handleChange4}
                            required
                        />
                    </div>
                    <div>
                        <label>email:</label>
                        <input 
                            type='text'
                            name='email'
                            value={medias.email}
                            onChange={handleChange4}
                            required
                        />
                    </div>
                    <div>
                        <label>facebook:</label>
                        <input 
                            type='text'
                            name='facebookLink'
                            value={medias.facebookLink}
                            onChange={handleChange4}
                            required
                        />
                    </div>
                    <div>
                        <label>tiktok:</label>
                        <input 
                            type='text'
                            name='tiktokLink'
                            value={medias.tiktokLink}
                            onChange={handleChange4}
                            required
                        />
                    </div>
                    <div>
                        <label>other links:</label>
                        <input 
                            type='text'
                            name='otherLink'
                            value={medias.otherLink}
                            onChange={handleChange4}
                            required
                        />
                    </div>
                    <div>
                        <label>established time:</label>
                        <input 
                            type='text'
                            name='dateEstablished'
                            value={time.dateEstablished}
                            onChange={handleChange5}
                            required
                        />
                    </div>
                    <div>
                        <label>open days:</label>
                        <input 
                            type='text'
                            name='openDays'
                            value={time.openDays}
                            onChange={handleChange5}
                            required
                        />
                    </div>
                    <div>
                        <label>open hours:</label>
                        <input 
                            type='text'
                            name='openHours'
                            value={time.openHours}
                            onChange={handleChange5}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
 */