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
          <a href="https://www.facebook.com" target="_blank" title='facebook'><FacebookIcon /></a>&nbsp;&nbsp; <a href="https://www.instagram.com" target="_blank" title='instagram'><InstagramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.telegram.com" target="_blank" title='telegram'><TelegramIcon /></a>&nbsp;&nbsp; 
          <a href="https://www.twitter.com" target="_blank" title='twitter'><TwitterIcon /></a> &nbsp;&nbsp; <a href="https://www.email.com" target="_blank" title='email'><EmailIcon /></a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem at rerum soluta quo nam perspiciatis consequuntur molestias. Quaerat, eius. Eaque maxime ipsum quae nam laborum est harum nobis. At?</p>
        <p>&copy; &nbsp;eTech  {new Date().getFullYear()}</p>
      </footer>
    );
}