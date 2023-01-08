import React, { useEffect, useState } from 'react'


const Card = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
       console.log("this is a mounting");
       return()=>{
        console.log("this is a unmounting")
       }
      },[count])
    
  return (
    <div>
       <h1>This is a Card Component</h1> 
       <h2>{count}</h2>
       <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}

export default Card