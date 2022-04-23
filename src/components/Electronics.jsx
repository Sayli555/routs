import axios from 'axios';
import  { useEffect, useState } from 'react';
import "./product.css"

import { Link } from 'react-router-dom';
const Electronics = () => {
const [electronc,setProducts]=useState([])

console.log(electronc)
    useEffect(()=>{
        axios.get("http://localhost:5555/products").then(({data})=>{
            setProducts(data)
        })
    },[])

  return (
    <div className='productE'>
      {electronc.map((p)=>(
          <div key={p.id} className="productImg">
              <Link to={`/electronc/${p.id}`}>
                  <img className='primg'
                  src={p.image}
                  alt="img"
                  />
              </Link>
          </div>
      )

      )}
    </div>
  )
}

export default Electronics
