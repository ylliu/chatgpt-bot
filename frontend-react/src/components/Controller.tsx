import React from 'react'
import Button from './Button';
import {useState} from "react";
function Controller() {
  const [hasWon,setHasWon] = useState(false);
    const handlePlaceBet = ()=>{
      setHasWon(true);
      console.log(hasWon);

    };

    console.log("hello")

  return (
    <div  className='container bg-green-500 mx-auto'>
      <Button runFunction={handlePlaceBet}/>
      <Button runFunction={handlePlaceBet}/>
    </div>
  )
}

export default Controller