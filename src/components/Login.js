// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../images/Group 3.png'
import '../App.css';

const Login = () => {
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
     history('/home')
  };

   return (
    <div>
      <div>
      <img src={profilePic} alt='profile pic' className='profile-pic'/>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" className='email_textbox' required/>
        <input type="password" placeholder="Password"className='pass_textbox' required/>
        <div>
        <button type="submit" className='login'>Login</button>
        </div>
        <a className='forgot_password'>Forgot Password?</a>
      </form>
      </div>
    </div>
  );
}

export default Login;
