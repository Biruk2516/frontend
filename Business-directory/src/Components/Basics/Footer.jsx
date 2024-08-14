import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import '../ComponentStyles/Footer.css';
export default function Footer()
{
    return(
        <footer>
        <div className='footer-icons'>
          <a href="https://www.facebook.com" title='facebook'><FacebookIcon /></a>&nbsp;&nbsp; <a href="https://www.instagram.com" title='instagram'><InstagramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.telegram.com" title='telegram'><TelegramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.twitter.com" title='twitter'><TwitterIcon /></a> &nbsp;&nbsp; <a href="https://www.email.com" title='email'><EmailIcon /></a>
        </div>
        <p>&copy; &nbsp;eTech  {new Date().getFullYear()}</p>
      </footer>
    );
}