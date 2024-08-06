import React from 'react';
import '../Style/BusinessCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const BusinessCard = ({ name, description, image, link }) => {

  function handleClick(event)
  {
    event.target.style.backgroundColor = 'red';
  }
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Website</a>
      <div className='comm-buttons'> 
          <FavoriteBorderIcon className='icons' />
          <CommentIcon className='icons'/> 
          <ShareIcon className='icons'/> 
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    width: '250px',
    backgroundColor:'#ddd',
    textDecoration:'none'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default BusinessCard;
