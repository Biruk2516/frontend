import React,{useState} from 'react';
import '../Style/BusinessCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';

const BusinessCard = ({ name, description, image, link }) => {

  const [value, setValue] = useState(2);
  function doSth()
  {
    console.log("Clicked");
  }
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="">Visit Website</a>
      <div className='comm-buttons'> 
        <IconButton title='Favorite'  onClick={doSth}><FavoriteBorderIcon className='icons' /></IconButton> 
          <IconButton title='Comment'> <CommentIcon className='icons'/></IconButton>
          <IconButton title='Share'> <ShareIcon className='icons'/> </IconButton>
      </div>
      <div className='rating'>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    boxShadow:'0 2px 5px #ec8f16',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'center',
    margin: '5px',
    width: '200px',
    backgroundColor:'lightblue',
    textDecoration:'none'
  },
  image: {
    width: '80%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '6px',
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