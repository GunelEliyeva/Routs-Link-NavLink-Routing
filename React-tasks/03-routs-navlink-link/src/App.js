
import {  useState } from 'react';
import './App.css';
import Card from './component/card';


function App() {
 const[cardData, setCardData]=useState(false);
  return (
    <div className="App">
      
      <button onClick={()=> setCardData(true)}>Click for Mounting</button>
      <button onClick={()=> setCardData(false)}>Click for UnMounting</button>
   {/* {cardData && <Card/>} */}
  {cardData ? <Card /> :null}
    </div>
  );
}

export default App;
