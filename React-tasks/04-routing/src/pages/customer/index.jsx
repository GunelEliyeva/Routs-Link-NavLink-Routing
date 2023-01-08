import React from 'react'
import {useNavigate} from "react-router-dom"

const Customer = () => {
let navigate=useNavigate();


  return (

    <div>
      <h3>Customer</h3>
      <button onClick={()=>navigate("/")}>Click</button>
      
    </div>
  )
}

export default Customer