import React from 'react';
import { Link } from 'react-router-dom'; 
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className='footer-container' style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '50px', background: 'transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box', display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: '1px solid #0F2323', opacity: 1, }}>
      <Link className='home-container' to="/home" style={{ textDecoration: 'none', color: '#fff' }}><AiFillHome /></Link>
      <Link to="/details" style={{ textDecoration: 'none', color: '#fff' }}><BiSolidUser /></Link>
    </footer>
  );
}

export default Footer;
