import React from 'react';
import {Routes,Route} from "react-router-dom";
import About from '../components/About';
import Electronics from '../components/Electronics';
import {Home} from "../components/Home";
import ElectronicsDetails from "../components/ElectronicsDetails";
import Cart from "../components/Cart"

function Routs() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/electronc" element={<Electronics/>} />
        <Route exact path="/electronc/:id" element={<ElectronicsDetails/>} />
        <Route exact path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  
  )
}

export  default Routs
