import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './basicStyles/Footer.css';
import { IconButton } from "@mui/material";
export default function Footer()
{
    return(
        <footer>
        <div className='footer-icons'>
          <a href="https://www.facebook.com" target="_blank" title='facebook'><IconButton  sx={{color:'blue'}}><FacebookIcon /></IconButton></a>&nbsp;&nbsp; 
          <a href="https://www.instagram.com" target="_blank" title='instagram'><IconButton sx={{color:'rgb(193,53,132)'}}><InstagramIcon /></IconButton></a>&nbsp;&nbsp; 
          <a href="https://www.telegram.com" target="_blank" title='telegram'><IconButton sx={{color:'rgb(0,122,255)'}}><TelegramIcon /></IconButton></a>&nbsp;&nbsp; 
          <a href="https://www.twitter.com" target="_blank" title='twitter'><IconButton sx={{color:'rgb(29,161,242)'}}><TwitterIcon /></IconButton></a> &nbsp;&nbsp; 
          <a href="https://www.email.com" target="_blank" title='email'><IconButton sx={{color:'lightgray'}}><EmailIcon /></IconButton></a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem at rerum soluta quo nam perspiciatis consequuntur molestias. Quaerat, eius. Eaque maxime ipsum quae nam laborum est harum nobis. At?</p>
        <p>&copy; &nbsp;eTech  {new Date().getFullYear()}</p>
      </footer>
    );
}