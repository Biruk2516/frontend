import React,{useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import Location from '@mui/icons-material/LocationOn';
import '../ComponentStyles/BusinessCard.css';

const BusinessCard = ({ name, description, image, link }) => {

  const [value, setValue] = useState(Math.floor(Math.random())+2);
  function doSth()
  {
    console.log("Clicked");
  }
  return (
    <div className='card' style={styles.card}>
      <img src={image} alt={name} className='card-image' style={styles.image}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="">Visit Website</a>
      <div className='comm-buttons'> 
        <IconButton title='Favorite'  onClick={doSth}><FavoriteBorderIcon className='icons' /></IconButton> 
          <IconButton title='Comment'> <CommentIcon className='icons'/></IconButton>
          <IconButton title='Share'> <ShareIcon className='icons'/> </IconButton>
          
      </div>
      <div className='rating'>
        Rating
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /><IconButton title='location'><Location className='icons-location' /></IconButton>
      </div>
      
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    boxShadow:'0 2px 5px hsl(195, 53%, 20%)',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    margin: '8px',
    width: '270px',
    backgroundColor:'hsl(195, 53%, 95%)',
    textDecoration:'none'
  },
  image: {
    width: '80%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
    marginLeft:'30px',
    boxShadow:'0 2px 5px hsl(195, 53%, 20%)',
  }
};

export default BusinessCard;


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