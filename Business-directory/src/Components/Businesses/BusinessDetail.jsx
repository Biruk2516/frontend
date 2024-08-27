import { Link, useLocation } from 'react-router-dom';
import React,{useState} from 'react';
import eTech from '/eTech.png';
import './ComponentStyles/businessDetail.css'
import { Button, IconButton ,TextField} from '@mui/material';
import Rating from '@mui/material/Rating';
import Location from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Footer from '../Basics/Footer';
const BusinessDetail = () => {
  const { state } = useLocation();
  const { busines } = state;
  const [comment, setComment] = useState('')
  const [openDialog, setOpenDialog] = useState(false);
  const [openComment, setOpenComment] = useState(false)
  const [rateValue, setRateValue] = useState(Math.floor(Math.random()*5)+1);
  const [isLikePressed, setIsLikePressed] = useState(false);



  function handleClick1()
  {
   setIsLikePressed(!isLikePressed);
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
    <>
    <Link to='/'><img style={{float:'left',width:'200px',height:'120px',borderRadius:'45px',margin:'30px'}} src={eTech} alt="" /></Link>
    <div className='main-container'>
    <div className="container">
    <div className='details'>
        <p>{busines.phone}</p><hr />
        <p><a href={busines.link} target="_blank" rel="noopener noreferrer">Visit Website</a></p><hr />
        <p>Category: {busines.category}</p><hr />
        <p>Location: {busines.location}</p><hr />
        <p>Contact: {busines.contactDetails}</p><hr />
        <p>Operating Hours: {busines.operatingHours}</p><hr />
        {/* Add any other data you have here */}
      </div>
      <div className='general'>
        <h1>{busines.name}</h1>
        <div style={{display:'flex'}}>
          <img className='detail-image' src={busines.image1} alt={busines.name} />
          <p style={{width:'500px',marginTop:'10px'}}>{busines.description_detail}</p>
        </div>
        
        <div className='sth'>
          {
            openComment ?
                <div>
                  <TextField autoFocus margin="dense"label="Comment" type="text"
                            fullWidth variant="outlined" value={comment} onChange={(e) => setComment(e.target.value)} />
                  <Button onClick={handleCloseComment} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={() => handleSubmitComment(busines.name)} color="primary">
                    Send
                  </Button>
                </div>
                :<div > 
                    <IconButton sx={{margin:'5px 30px'}} title='Favorite'  name='favorite'  onClick={handleClick1}>
                        {isLikePressed ? <Favorite color='error' /> : <FavoriteBorderIcon  /> }
                    </IconButton> 
                    <IconButton sx={{margin:'5px 30px'}} title='Comment' name='comment' onClick={handleClick2}> <CommentIcon /></IconButton>
                    <IconButton sx={{margin:'5px 30px'}} title='Share' name='share' onClick={handleOpenDialog}> <ShareIcon /> </IconButton>
                </div> 
          }
            <h4>sub city</h4><h4>street name</h4>
            <div className='rating'>
                Rating &nbsp;&nbsp;&nbsp;
              <Rating
                name="simple-controlled"
                value={rateValue}
                onChange={(event, newValue) => {
                  setRateValue(newValue);
                }} />
            </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default BusinessDetail;