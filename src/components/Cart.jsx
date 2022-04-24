import { useEffect, useState } from 'react';
import "./Cart.css"
 
const Cart = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("Cart")))
  },[])

 console.log({data})

    
  return (
    
    <div className='CartPage'>
      {data.map((e)=>(
        <div className='cartProduct'>
           <div>
          <img className='cartImg'
          src={e.img}
          />
        </div>
        <h2 className='Ctitle'>{e.title}</h2>
        <h1>Rs {e.price}/-</h1>
        </div>      
      ))}
    </div>
  )
}

export default Cart
