import React,{useRef, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button, IconButton ,TextField} from '@mui/material';
import Rating from '@mui/material/Rating';
import Location from '@mui/icons-material/LocationOn';
import '../ComponentStyles/Business.css'
import ShareOptions from './ShareOptions';
import { useNavigate } from 'react-router-dom';

const BusinessCard = ({ name, description, image, link,busines }) => {

  const navigate = useNavigate();

  const [rateValue, setRateValue] = useState(Math.floor(Math.random()*5)+1);
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [comment, setComment] = useState('')
  const [openDialog, setOpenDialog] = useState(false);
  const [openComment, setOpenComment] = useState(false)

  const rateRef=useRef(null);

  const handleClick = () => {
    navigate(`/business/${busines.id}`, { state: { busines } });
  };
function handleClick1()
  {
   setIsLikePressed(!isLikePressed);
  }


function businessDetail(name, description)
{
  console.log(name,'\n'+description);
  console.log(isLikePressed && 'this business is in your favorite list' )
  console.log( 'rating',rateValue+'/5')
}


function handleCloseDialog()
{
  setOpenDialog(false);
}


const handleClick2 = () => {
    setOpenComment(true);
    rateRef.current.style.margin='-10px 0px 0px 0px'
  };


  const handleCloseComment = () => {
    setOpenComment(false);
    setComment('');
     rateRef.current.style.margin='20px 0px 0px 0px'
  };


function handleOpenDialog()
{
  setOpenDialog(true);
}


const handleSubmitComment = (n) => {
    if(comment.length>0)
    {
      console.log( comment);
      console.log('Comment submitted to:',n);

      setOpenComment(false);
      setComment('');
    }
    else{
      setOpenComment(false);
    }
  };

  return (
    <div className='card' style={styles.card}>
      <img  onClick={handleClick} src={image} alt={name} style={styles.image}/>
      <h2 onClick={() => businessDetail(name,description)}>{name}</h2>
      <p>{description}</p>
      {openComment ? null :<a href={link} target="_blank" rel="">Visit Website</a>}
      {
        openComment ?
            <div>
              <TextField autoFocus margin="dense"label="Comment" type="text"
                        fullWidth variant="outlined" value={comment} onChange={(e) => setComment(e.target.value)} />
              <Button onClick={handleCloseComment} color="primary">
                Cancel
              </Button>
              <Button onClick={() => handleSubmitComment(name)} color="primary">
                Send
              </Button>
            </div>
            :<div className='comm-buttons'> 
                <IconButton className='icon-buttons' title='Favorite'  name='favorite'  onClick={handleClick1}>
                    {isLikePressed ? <Favorite color='error' className='icons'/> : <FavoriteBorderIcon className='icons' /> }
                </IconButton> 
                <IconButton className='icon-buttons' title='Comment' name='comment' onClick={handleClick2}> <CommentIcon className='icons'/></IconButton>
                <IconButton className='icon-buttons' title='Share' name='share' onClick={handleOpenDialog}> <ShareIcon className='icons'/> </IconButton>
            </div> 
      }
      
      <div ref={rateRef} className='rating'>
          Rate Us&nbsp;&nbsp;&nbsp;
        <Rating
          name="simple-controlled"
          value={rateValue}
          onChange={(event, newValue) => {
            setRateValue(newValue);
          }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton className='icon-buttons' title='location'><p style={{fontSize:'0.7em',marginRight:'-12px'}}>direction</p><Location className='icons-location' /></IconButton>
      </div>
      <ShareOptions open={openDialog} onClose={handleCloseDialog} onClick={handleCloseDialog} />
    </div>
  );
};

const styles = {
  card: {
    display:'flex',
    alignItems:'center',
    justifyContents:'center',
    flexDirection:'column',
    border: '1px solid #ddd',
    boxShadow:'0 2px 5px hsl(195, 53%, 20%)',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center',
    margin: '4px 6px',
    width: '380px',
    height:'420px',
    maxHeight:'420px',
    textDecoration:'none',
  },
  image: {
    width: '99%',
    height: '190px',
    objectFit: 'cover',
    borderRadius: '4px',
    boxShadow:'0 2px 5px hsl(195, 53%, 50%)',
  }
};

export default BusinessCard;
