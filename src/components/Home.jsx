import React from 'react';
import Electronics from './Electronics';
import Footer from './Footer';
import "./Home.css"

function Home() {
  return (
    <div>
        <div className='home'>
      <img className='homeImg'
      src='https://rukminim1.flixcart.com/flap/844/140/image/1254cfd091d35890.jpg?q=50'
      alt="img"
      />
    </div>
    <div>
      <Electronics/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  
  )
}

export  {Home}
