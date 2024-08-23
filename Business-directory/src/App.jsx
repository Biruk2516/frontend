import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import './App.css';
import BusinessDisplay from './Components/Businesses/BusinessDisplay';
import PostBusinessPage from './Pages/PostBusinessPage';
import ProfilePage from './Pages/ProfilePage';
import ServicePage from './Pages/ServicePage';
import AboutUsPage from './Pages/AboutUsPage';
import SettingPage from './Pages/SettingPage';


function App() {

  return(
    
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/postBusiness'  element={<PostBusinessPage />}/>
          <Route path='/businesses' element = {<BusinessDisplay />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/profilePage' element={<ProfilePage />} />
          <Route path='/servicePage' element={<ServicePage />} />
          <Route path='/aboutUsPage' element={<AboutUsPage />} />
          <Route path='/settingPage' element={<SettingPage />} />
        </Routes> 

      </div>
    </Router>
  );
}

export default App;
