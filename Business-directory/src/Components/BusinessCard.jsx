import React from 'react';
import '../Style/BusinessCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/SaveRounded'

const BusinessCard = ({ name, description, image, link }) => {

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="">Visit Website</a>
      <div className='comm-buttons'> 
         <FavoriteBorderIcon className='icons' />
          <CommentIcon className='icons'/> 
          <ShareIcon className='icons'/> 
          <FavoriteBorder  className='icons'/>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    margin: '5px',
    width: '200px',
    backgroundColor:'#ddd',
    textDecoration:'none'
  },
  image: {
    width: '80%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  // card: {
  //   border: '1px solid #ddd',
  //   borderRadius: '8px',
  //   padding: '16px',
  //   textAlign: 'center',
  //   margin: '16px',
  //   width: '250px',
  //   backgroundColor:'#ddd',
  //   textDecoration:'none'
  // },
  // image: {
  //   width: '100%',
  //   height: '150px',
  //   objectFit: 'cover',
  //   borderRadius: '8px',
  // },
};

export default BusinessCard;
