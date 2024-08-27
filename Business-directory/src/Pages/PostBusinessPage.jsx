import React, { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import {MenuItem, Select } from "@mui/material";
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import Book from '@mui/icons-material/BookTwoTone'
import Cars from '@mui/icons-material/CarRepair'
import GamesRoundes  from '@mui/icons-material/GamesRounded'
import '../PageStyle/PostPage.css';
import eTech from '/eTech.png';
import businessUsers from '../user/businessUsers.js';
import { Button } from "@mui/material";
import Validations from '../Validations/Validations.js';
import Footer from '../Components/Basics/Footer.jsx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PostBusinessPage = () => {

    const id=Date.now()
    let businessGeneral = {
        id:id,
        name: '',
        description: '',
        image: '',
        link: '',
        category:''
}

    let businessDetail = {
        fName:'',
        lName:'',
        country:'',
        licenseNumber:'',
        city:'',
        subCity:'',
        streetName:'',
        businessType:'',
        facebook:'',
        twitter:'',
        otherMedia:'',
        establishedTime:'',
        openDays:'',
        openHours:''

    }

const [newGeneralBusiness, setNewGeneralBusiness] = useState(businessGeneral);
const [newDetailBusiness, setNewDetailBusiness] = useState(businessDetail);
const [nameErrorMessage, setNameErrorMessage] = useState('');
const [inputLengthError, setInputLengthError] = useState('');
const [linkError, setLinkError] = useState('')
const [phone1, setPhone1] = useState('');
const [phone2, setPhone2] = useState('');
const [phone3, setPhone3] = useState('');
const [phone4, setPhone4] = useState('');

const [selected, setSelected] = useState('')

function handlePhoneChange1(value)
{
    setPhone1(value);
}
function handlePhoneChange2(value)
{
    setPhone2(value);
}
function handlePhoneChange3(value)
{
    setPhone3(value);
}
function handlePhoneChange4(value)
{
    setPhone4(value);
}

function handleSelect(code)
{
    setSelected(code);
    console.log(selected);
}



function handleChange(e){
    const newBusiness={...newGeneralBusiness, [e.target.name]: e.target.value }
    setNewGeneralBusiness(newBusiness);
}
function handleChange2(e)
{
    const detailBusiness={...newDetailBusiness, [e.target.name]:e.target.value}
    setNewDetailBusiness(detailBusiness);
}

const phones={phone1,phone2,phone3,phone4}

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like saving data or sending it to a server
    const userNameValidation = Validations.validateuserName(newGeneralBusiness.name);
    const inputLengthValidation = Validations.validateInputLength(newGeneralBusiness.description);
    const inputLinkVaidation = Validations.validateWebsiteLink(newGeneralBusiness.link)
    setInputLengthError(inputLengthValidation);
    setNameErrorMessage(userNameValidation);
    setLinkError(inputLinkVaidation);
    if (!userNameValidation && !inputLengthError && inputLinkVaidation )
    {
    console.log( newGeneralBusiness );
    console.log(newDetailBusiness);
    console.log(phones);

    setNewGeneralBusiness( {
        name: '',
        description: '',
        image: '',
        link: '',
        category:''
    })
    setNewDetailBusiness( {fName:'',
        lName:'',
        country:"",
        licenseNumber:'',
        city:'',
        subCity:'',
        streetName:'',
        businessType:'',
        facebook:'',
        twitter:'',
        otherMedia:'',
        establishedTime:'',
        openDays:'',
        openHours:''

     })
    setPhone1('')
    setPhone2('')
    setPhone3('')
    setPhone4('')

}
};


return (<>
    <div>
        <header>
            <Link to='/'> <img src={eTech} alt="" title='Home Page' /></Link>
        <h1>Post a New Business here</h1>
        <Button className='to-home-page' component={Link} to='/'><h3>home</h3></Button>
        </header>     
        <div className='post-image'>
            <img src={businessUsers.user1.image} /> <h2>{businessUsers.user1.fName} {businessUsers.user1.lName}</h2><p><a href="#">{businessUsers.user1.email}</a></p>
        </div>
        
        <div className='main-post'>
            <form  className="general-form" onSubmit={handleSubmit}>
                <div className="inputs">
                        <label>Business Name*</label>
                        <input name='name'type="text" value={newGeneralBusiness.name} onChange={handleChange} placeholder='business name...' required  />
                        {nameErrorMessage && <p style={{color:'red', fontSize:'0.8em'}}>{nameErrorMessage}</p>}
                </div>
                    
                <div className="inputs">
                    <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <label>first name*</label>
                            <input value={newDetailBusiness.fName} onChange={handleChange2} name='fName' type="text" placeholder='first name...' required />
                        </div>
                        <div>
                            <label>last name*</label>
                            <input value={newDetailBusiness.lName} onChange={handleChange2}  name='lName' type="text" placeholder='last name...' required />
                        </div>
                    </div>
                </div>
                <div className="inputs">
                        <label> Business Category*</label>
                        <Select name='category' value={newGeneralBusiness.category} onChange={handleChange} sx={{width:'600px'}}>
                            <MenuItem value="Hospital"><LocalHospitalIcon />&nbsp;&nbsp;Hospital</MenuItem>
                            <MenuItem value="Restaurant"><RestaurantIcon />&nbsp;&nbsp;Restaurant</MenuItem>
                            <MenuItem value="Technology"><ComputerIcon />&nbsp;&nbsp;Technology</MenuItem>
                            <MenuItem value="RealEstate">Real Estate</MenuItem>
                            <MenuItem value="Pharmacy"><LocalPharmacyIcon />&nbsp;&nbsp;Pharmacy</MenuItem>
                            <MenuItem value="Gaming"><GamesRoundes />&nbsp;&nbsp;Gaming</MenuItem>
                            <MenuItem value="Automotive"><Cars />&nbsp;&nbsp;Automotive</MenuItem>
                            <MenuItem value="Finance">Finance</MenuItem>
                            <MenuItem value='Shop'><AddShoppingCartIcon />&nbsp;&nbsp;Shop</MenuItem>
                            <MenuItem value="Education"><Book />&nbsp;&nbsp;Education</MenuItem>
                            <MenuItem value="Entertainment">Entertainment</MenuItem>
                            <MenuItem value="Travel">Travel</MenuItem>
                            <MenuItem value="Fitness">Fitness</MenuItem>
                            <MenuItem value="Legal Services">Legal Services</MenuItem>
                            <MenuItem value="Construction">Construction</MenuItem>
                            <MenuItem value="Beauty & Personal Care">Beauty & Personal Care</MenuItem>
                            <MenuItem value="Art & Design">Art & Design</MenuItem>
                            <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                            <MenuItem value="Consulting">Consulting</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                </div>
                <div className="inputs">
                        <label>Country*</label>
                        <ReactFlagsSelect
                      //  value={newDetailBusiness.country}
                                 selected={selected}
                                 onSelect={handleSelect}
                                searchable
                                placeholder='Select Country'
                                searchPlaceholder='search countries'
                            />
                </div>
                <div className="inputs">
                        <label>Business license number *</label>
                        <input name='licenseNumber'type="text" value={newDetailBusiness.licenseNumber} onChange={handleChange2} placeholder='license number' required  />
                </div>
                <div className='inputs'>
                    <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div className='cities'>
                            <label>City*</label>
                            <Select value={newDetailBusiness.city} onChange={handleChange2} name='city'  defaultValue='City *' fullWidth>
                                <MenuItem value='City *'>City *</MenuItem>
                                <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
                                <MenuItem value="Hawassa">Hawassa</MenuItem>
                                <MenuItem value="Bahir dar">Bahir dar</MenuItem>
                                <MenuItem value="Gondar">Gondar</MenuItem>
                                <MenuItem value="Dire Dawa">Dire Dawa</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <label>sub city*</label>
                            <input value={newDetailBusiness.subCity} onChange={handleChange2}  name='subCity' type="text" placeholder='sub city...' required />
                        </div>
                        <div>
                            <label>street name</label>
                            <input value={newDetailBusiness.streetName} onChange={handleChange2}  name='streetName' type="text" placeholder='street name...' />
                        </div>
                    </div>
                </div>
                <div className="inputs">
                        <label>Business Type*</label>
                        <input value={newDetailBusiness.businessType} onChange={handleChange2}  type="text" name='businessType' placeholder='business type...' required />
                </div>
                <div className="inputs">
                        <label>image url</label>
                        <input value={newGeneralBusiness.image} onChange={handleChange} type="text" name='image' placeholder='image link' />
                </div>
                <div className="inputs">
                        <label>Description*</label>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <textarea value={newGeneralBusiness.description} onChange={handleChange}  name='description' placeholder='description about the business....' required />
                            {inputLengthError && <p style={{color:'red',fontSize:'0.8em',right:'0px'}}>{inputLengthError}</p>}
                        </div>     
                </div>            
                <div className="inputs">
                     Owner's Phone:
                    <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <label>phone number #1 *</label>
                            <PhoneInput country={'ET'} value={phone1} onChange={handlePhoneChange1} />
                           
                        </div>
                        <div>
                            <label>phone number #2 *</label>
                            <PhoneInput country={'ET'} value={phone2} onChange={handlePhoneChange2} />
                            
                        </div>
                    </div>
                        
                </div>
                <div className="inputs">
                    Business Phone:
                    <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <label>phone number #1 *</label>
                            <PhoneInput country={'ET'} value={phone3} onChange={handlePhoneChange3} />
                            
                        </div>
                        <div>
                            <label>phone number #2 *</label>
                            <PhoneInput country={'ET'} value={phone4} onChange={handlePhoneChange4} />
                          
                        </div>
                    </div>
                </div>
                <div className="inputs">
                        <label>Website link*</label>
                        <input value={newGeneralBusiness.link} onChange={handleChange} placeholder='https://www.yourwebsite.com' type='text' name='link' required />
                        {linkError && <p style={{color:'red',fontSize:'0.8em'}}>{linkError}</p>}
                </div>
                <div className='inputs'>
                    Social medias
                    <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <label>facebook account</label>
                            <input value={newDetailBusiness.facebook} onChange={handleChange2} placeholder='facebook.com'  name='facebook' type="text" />
                        </div>
                        <div>
                            <label>twitter account</label>
                            <input value={newDetailBusiness.twitter} onChange={handleChange2} placeholder='twitter.com'  name='twitter' type="text" />
                        </div>
                        <div>
                            <label>other account</label>
                            <input value={newDetailBusiness.otherMedia} onChange={handleChange2}   name='otherMedia' type="text" />
                        </div>
                    </div>
                </div>
                    
                <div className="inputs">
                   <div className='sth' style={{display:'flex', justifyContent:'center'}}>
                        <div>
                            <label>established time*</label>
                            <input value={newDetailBusiness.establishedTime} onChange={handleChange2} placeholder='dd-mm-yy'  type='text'  name='establishedTime' required />
                        </div>       
                        <div>
                            <label>open days*</label>
                            <input value={newDetailBusiness.openDays} onChange={handleChange2} placeholder='startDay - endDay' type='text' name='openDays' required />
                        </div>
                        <div>
                            <label>open hours*</label>
                            <input value={newDetailBusiness.openHours} onChange={handleChange2} placeholder='openHour - closeHour' type='text' name='openHours' required />
                        </div>
                    </div>
                </div>
                <p style={{color:'red',fontSize:'0.7em',float:'left'}}>the fields with * must be filled</p>
                <div><input type="checkbox" name="" id="" />&nbsp;I agree to the terms of <a href="">policy</a> and <a href="">services.</a></div><br />
                <button type="submit">Post</button>
            </form>
        </div>
       <Footer />
        
    </div>
    
    </>
);
    
};

export default PostBusinessPage;