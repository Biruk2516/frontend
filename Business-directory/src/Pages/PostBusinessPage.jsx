import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eTech from '/eTech.png'
import Footer from '../Components/Basics/Footer';
import PostForm1 from '../PageRelated/PostForm1';
import PostForm2 from '../PageRelated/PostForm2';
const PostBusinessPage = () => {

    function handleSubmit(e)
    {

    }
    return (
        <div>
            <header>
                <Link to='/' >
                    <img src={eTech} alt="Home" title='Home Page' />
                </Link>
                <h2>Post a new business for the world to see it ....</h2>
                <p>Register your business here....</p>
            </header>
            <div className='main-content'>
                <h1>Post a New Business</h1>
                    <PostForm1 />
                    <PostForm2 /> 
                
            </div>
            <Footer />
        </div>
    );
};

export default PostBusinessPage;