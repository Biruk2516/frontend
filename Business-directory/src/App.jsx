import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import './App.css';
import BusinessDisplay from './Components/Businesses/BusinessDisplay';
import PostBusinessPage from './Pages/PostBusinessPage';

function App() {

  return(
    
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/postBusiness'  element={<PostBusinessPage />}/>
          <Route path='/Businesses' element = {<BusinessDisplay />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes> 


      </div>
    </Router>
  );
}

export default App;
