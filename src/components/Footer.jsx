import React from 'react'
import {Link} from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
        <div className='Electronic'>
            <Link to="/about" className='Link'>About Us</Link>
        </div>
        <div className='Electronic'>
            <Link to="/electronc" className='Link'>Faqe Page</Link>
        </div>
        <div className='Electronic'>
            <Link to="/electronc" className='Link'>Contact Us</Link>
        </div>
        </div>

        <div className='footer2'>
        <div className='Electronic'>
            <Link to="/" className='Link'>Home</Link>
        </div>
        <div className='Electronic'>
            <Link to="/electronc" className='Link'>Electricity</Link>
        </div>
        <div className='Electronic'>
            <Link to="/electronc" className='Link'>clothing</Link>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
