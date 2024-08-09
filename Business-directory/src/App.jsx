import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import './App.css';
import BusinessDisplay from './Components/BusinessDisplay';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/Businesses' element = {<BusinessDisplay />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
