import React from "react";
import '../PageStyle/AboutUsPage.css'
import Footer from "../Components/Basics/Footer";
import eTech from '/eTech.png';
import emoji from '/emoji.jpg';
import grinch from '/Grinch.png';
import { Link } from "react-router-dom";
export default function AboutUsPage()
{
    return(<>
        <div className="about-container">
           <Link to='/'><button style={{float:'left'}}><h2>{'<- Back'}</h2></button></Link> 
            <h1>About Us</h1>
            <p>
            <img src={eTech} alt="" style={{width:'500px'}} />
            </p>

            <p>
                Welcome to our Business Directory! We are committed to connecting you with the best local businesses in your area. Our platform provides a comprehensive listing of businesses, allowing users to easily find services and products that meet their needs.
            </p>
            <h2>Our Mission</h2>
            <p>
            <img src={emoji} alt="" style={{width:'500px'}} />
            </p>
            <p>
                Our mission is to empower consumers by providing them with accurate and up-to-date information about local businesses. We believe in supporting small businesses and helping them grow through visibility and customer engagement.
            </p>
            <h2>Meet the Creator</h2>
            <p>
            <img src={grinch} alt="" style={{width:'500px'}} />
            </p>
            <p>
                This website was created by eTech Interns, a passionate entrepreneurs dedicated to helping local businesses thrive. With years of experience in the industry, the eTech interns have a vision of creating a platform that not only lists businesses but also fosters community connections.
            </p>
            <h2>Contact Us</h2>
            <p>
                phone number : +251-912131415
            </p>
            <p>
                If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:biruk2516@gmail.com">biruka2516@gmail.com</a>.
            </p>
         </div>
         
         <Footer />
         </>
        
    );
}