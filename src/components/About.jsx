import React from 'react';
import "./About.css"
import Footer from './Footer';

const About = () => {
  return (
    <div className='About'>
      <div>
        <h1>About Us</h1>
      </div>
      <div className='Describe'>
        <h2>We Create Thoughtful Products That Are Worth Holding Onto</h2>
        <p>The products we use on a daily basis say something about the people we are. We believe many things in life get better with time; it is that spirit we try to infuse in everything we create. In a world where we are overwhelmed by products made to break down, wear out or go out style, we aim to go against that grain.</p>
      </div>
      <div className='d2'>
        <div className='describe2'>
          <h1>We Focus on Value, Durability, and a Timeless Aesthetic.</h1>
          <p>Our goods are based in value-driven design and quality manufacturing. All of us make a statement every time we buy something. We vote with our wallets. It’s our belief that value is more than just saving a few bucks - true value lies at the intersection of something made well for a fair price, created in way that supports those who made it.</p>
          <h1 className='h2'> Objects In Our Lives Are Part Of Who We Are</h1>
          <p>No two people are the same, just like no two wallets or bags look the same over time. Each carries a unique story that is a reflection of our individual lifestyle. When a product improves and patinas with use, it carries the history of its user, of places traveled and memories made.</p>
        </div>
        <div className='describeimg'>
          <img className='describeimg1'
          src="https://i.shgcdn.com/100c3286-40e8-410e-bac4-522247fff055/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          alt="img"
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About

