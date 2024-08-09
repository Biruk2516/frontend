import React,{useRef} from "react";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography,Button } from "@mui/material";
import Close from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import eTech from '/eTech.png'


function PostBusiness(props)
{
    const inputRef1=useRef(null);    const inputRef2=useRef(null);    const inputRef3=useRef(null);    const inputRef4=useRef(null);
    const inputRef5=useRef(null);    const inputRef6=useRef(null);    const inputRef7=useRef(null);

    function handleFocus1()
    {
        inputRef1.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef1.current.style.border = '2px solid black';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus2()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef2.current.style.border = '2px solid black';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus3()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef3.current.style.border = '2px solid black';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus4()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef4.current.style.border = '2px solid black';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus5()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef5.current.style.border = '2px solid black';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus6()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef6.current.style.border = '2px solid black';
        inputRef7.current.style.backgroundColor = '';
        inputRef7.current.style.border = '';
    }
    function handleFocus7()
    {
        inputRef1.current.style.backgroundColor = '';
        inputRef1.current.style.border = '';
        inputRef2.current.style.backgroundColor = '';
        inputRef2.current.style.border = '';
        inputRef3.current.style.backgroundColor = '';
        inputRef3.current.style.border = '';
        inputRef4.current.style.backgroundColor = '';
        inputRef4.current.style.border = '';
        inputRef5.current.style.backgroundColor = '';
        inputRef5.current.style.border = '';
        inputRef6.current.style.backgroundColor = '';
        inputRef6.current.style.border = '';
        inputRef7.current.style.backgroundColor = ' hsl(34, 100%, 80%)';
        inputRef7.current.style.border = '2px solid black';
    }

    return(
        <Dialog open={props.openIt} fullWidth fullScreen m={4} className="post-job">
          
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Post Business
                    <IconButton onClick={props.closeDialog}>
                       <Button><Close /></Button> 
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        {/* <button onClick={handleFocus}>click</button> */}
                        <FilledInput onClick={handleFocus1} ref={inputRef1} placeholder="Owner Name *" disableUnderline fullWidth required />
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
                        <FilledInput  onClick={handleFocus2} ref={inputRef2} placeholder="Business Title *" disableUnderline fullWidth required />
                    </Grid>
                    <Grid item xs={6}>
                    <Select disableUnderline variant="filled" defaultValue='Country *'   fullWidth>
                            <MenuItem value='Country *'>Country *</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Spain">Spain</MenuItem>
                            <MenuItem value="France">France</MenuItem>
                            <MenuItem value="Germany">Germany</MenuItem>
                            <MenuItem value="Russia">Russia</MenuItem>
                            <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput  onClick={handleFocus3} ref={inputRef3} placeholder="Something" disableUnderline fullWidth required />
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
                        <FilledInput  onClick={handleFocus4} ref={inputRef4} placeholder="Something" disableUnderline fullWidth required />
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
                        <FilledInput  onClick={handleFocus5} ref={inputRef5} placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6} >
                        <FilledInput  onClick={handleFocus6} ref={inputRef6} placeholder="Something" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={12} >
                        <FilledInput  onClick={handleFocus7} ref={inputRef7} placeholder="Description *" disableUnderline fullWidth multiline rows={4} required />
                    </Grid>
                    <Grid item xs={12}>
                    <DialogActions mb={8}>
                     <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography color={{color:'red'}} variant="caption">*requires Fields</Typography>
                    <Button disableElevation variant="outlined" component='a' href="https://www.google.com" target='_blank'>Post</Button>
                </Box>
            </DialogActions>
                    </Grid>
                </Grid>
            </DialogContent>
            
        </Dialog>
    );
}

export default PostBusiness;