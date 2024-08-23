import React,{useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmsIcon from '@mui/icons-material/SmsOutlined'
import { Button, IconButton,Typography ,TextField,Dialog,DialogActions,DialogContent,DialogTitle, Grid, Box} from '@mui/material';
import Rating from '@mui/material/Rating';
import Location from '@mui/icons-material/LocationOn';
import '../ComponentStyles/Business.css';

const BusinessCard = ({ name, description, image, link },props) => {

  const [rateValue, setRateValue] = useState(Math.floor(Math.random())+2);
  const [isLikePressed, setIsLikePressed] = useState(false);
  const [comment, setComment] = useState('')
  const [openDialog, setOpenDialog] = useState(false);
  const [openComment, setOpenComment] = useState(false)
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
  };

  const handleCloseComment = () => {
    setOpenComment(false);
    setComment('');
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
      <img  onClick={() => businessDetail(name,description)} src={image} alt={name} style={styles.image}/>
      <h2 onClick={() => businessDetail(name,description)}>{name}</h2>
      <p>{description}</p>
      {openComment ? null :<a href={link} target="_blank" rel="">Visit Website</a>}
      {openComment ?
          <div>
            <TextField
              autoFocus
              margin="dense"
              label="Comment"
              type="text"
              fullWidth
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleCloseComment} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleSubmitComment(name)} color="primary">
              Send
            </Button>
          </div>
          :<div className='comm-buttons'> 
              <IconButton className='icon-buttons' title='Favorite'  name='favorite'  onClick={handleClick1}>{isLikePressed ? <Favorite color='error' className='icons'/> : <FavoriteBorderIcon className='icons' /> }</IconButton> 
              <IconButton className='icon-buttons' title='Comment' name='comment' onClick={handleClick2}> <CommentIcon className='icons'/></IconButton>
              <IconButton className='icon-buttons' title='Share' name='share' onClick={handleOpenDialog}> <ShareIcon className='icons'/> </IconButton>
          </div> }
      
      <div className='rating'>
          Rate Us&nbsp;&nbsp;&nbsp;&nbsp;
        <Rating
          name="simple-controlled"
          value={rateValue}
          onChange={(event, newValue) => {
            setRateValue(newValue);
          }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton className='icon-buttons' title='location'><p style={{fontSize:'0.7em',marginRight:'-11px'}}>location</p><Location className='icons-location' /></IconButton>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Share with:</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} mt={3} >
            <Grid item xs={4}>
               <a href="https://www.facebook.com" target='_blank'><IconButton className='share-icons' sx={{color:'blue'}}><FacebookIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
                <a href="https://www.instagram.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(193,53,132)'}}><InstagramIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.twitter.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(29,161,242)'}}><TwitterIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.telegram.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(0,122,255)'}}><TelegramIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.youtube.com" target='_blank'><IconButton className='share-icons' sx={{color:'rgb(255,0,0)'}}><YouTubeIcon /></IconButton></a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://www.facebook.com" target='_blank'><IconButton className='share-icons' sx={{color:'black'}}><SmsIcon /></IconButton></a>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box width='100%' display='flex' justifyContent='space-between' >
          <Typography color={{color:'darkblue'}} >Thank you for sharing :)</Typography>
          <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

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
    width: '370px',
    maxHeight:'420px',
    textDecoration:'none',
  },
  image: {
    minWidth: '95%',
    minHeight: '180px',
    objectFit: 'cover',
    borderRadius: '4px',
    boxShadow:'0 2px 5px hsl(195, 53%, 50%)',
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