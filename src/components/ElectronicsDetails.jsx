import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./detail.css"

const ElectronicsDetails = () => {
    const {id} =useParams();

    const [prod,setProducts]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:5555/products/${id}`).then(({data})=>{
            setProducts(data)
        })
    },[])
  return (
    <div className='productPage'> 
     <div>
         <img className='detailimg'
         src={prod.image}
         />
     </div>
     <div className='productDetail'>
         <h1>{prod.category}</h1>
         <h2>{prod.title}</h2>
         <p>{prod.description}</p>
         <div>
         <span>Rs.{prod.price}/-</span>
         <button>Add To Cart</button>
     </div>
     </div>
    
    </div>
  )
}

export default ElectronicsDetails

