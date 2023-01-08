import React from 'react'
import {useParams} from "react-router-dom"
const CustomerDetails = () => {
  let params=useParams();
    
  return (
    <>
    <div>CustomerDetails</div>
    <button onClick={()=>console.log(params.id)}>Click</button>
    </>
   
  )
}

export default CustomerDetails