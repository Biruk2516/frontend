import React from "react";
import { Button, IconButton,Typography ,Dialog,DialogActions,DialogContent,DialogTitle, Grid, Box} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmsIcon from '@mui/icons-material/SmsOutlined';
export default function ShareOptions(props)
{
    return(
      <Dialog open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>Share with:</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} mt={3} >
            <Grid item xs={4}>
               <a href="https://www.facebook.com" target='_blank'><IconButton className='share-icons' sx={{color:'blue'}}><FacebookIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
                <a href="https://www.instagram.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(193,53,132)'}}><InstagramIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.twitter.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(29,161,242)'}}><TwitterIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.telegram.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(0,122,255)'}}><TelegramIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.youtube.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(255,0,0)'}}><YouTubeIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.facebook.com" target='_blank'><IconButton className='share-icons' sx={{color:'black'}}><SmsIcon /></IconButton></a>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box width='100%' display='flex' justifyContent='space-between' >
          <Typography color={{color:'darkblue'}} >Thank you for sharing :)</Typography>
          <Button onClick={props.onClick} color="primary">
              Cancel
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    )
}