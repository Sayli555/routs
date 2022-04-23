import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className='navbarcontainer'>      
          <Link to="/" className='logo'>
          <img
                src="https://cdn-icons-png.flaticon.com/128/196/196572.png"                
                alt="logo"
              />
          </Link>
          <div className='Electronic'>
            <Link to="/" className='Link'>Home</Link>
          </div>   

          <div className='Electronic'>
            <Link to="/electronc" className='Link'>Electronic</Link>
          </div>   
          
          <div className='Electronic'>
            <Link to="/electronc" className='Link'>clothing</Link>
          </div>  
          <div className='Electronic'>
            <Link to="/electronc" className='Link'>About</Link>
          </div>
          <div className='SignIn'>
            <Link to="/electronc" className='Link'>Sign In</Link>
          </div>
          <Link to="/" className='cart'>
          <img  className='cartImg'
                src="https://img.icons8.com/ios/2x/add-shopping-cart--v2.gif"                
                alt="cart"
              />
          </Link>
    </div>
  )
}
export  {Navbar}
