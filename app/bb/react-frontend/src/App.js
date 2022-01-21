import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import ProfessionalRegister from './components/ProfessionalRegister';
import ProfessionalLogin from './components/ProfessionalLogin';
import Professional from './components/Professional';
import Request from './components/Request';
import OtpPhone from './components/OtpPhone';
import OtpVerify from './components/OtpVerify';
import ThanksSignup from './components/ThanksSignup';
import RequestCreated from './components/RequestCreated';
import ProfileUpdated from './components/ProfileUpdated';
import ProfessionalOtpVerify from './components/ProfessionalOtpVerify';
import ProfessionalOtpPhone from './components/ProfessionalOtpPhone';

function App(props) {
  
    return (
      <Router>
        <div className="app">
          <Routes>
          <Route path='/' element={<UserRegister/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/user-list' element={<Dashboard/>} />
          <Route exact path='/register-as-professional' element={<ProfessionalRegister/>} />
          <Route exact path='/login-as-professional' element={<ProfessionalLogin/>} />
          <Route exact path='/professional-profile' element={<Professional/>} />
          <Route exact path='/create-request' element={<Request/>} />
          <Route exact path='/phone-otp' element={<OtpPhone/>} />
          <Route exact path='/otp-verify' element={<OtpVerify/>} />
          <Route exact path='/professional-phone-otp' element={<ProfessionalOtpPhone/>} />
          <Route exact path='/professional-otp-verify' element={<ProfessionalOtpVerify/>} />
          <Route exact path='/thanks-signup' element={<ThanksSignup/>} />
          <Route exact path='/request-created' element={<RequestCreated/>} />
          <Route exact path='/profile-updated' element={<ProfileUpdated/>} />
          </Routes>
        </div>
      </Router>
    );
  }


export default App;