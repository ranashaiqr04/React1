import React, { useState } from 'react'

export default function App() {

const [counter,setCounter] =useState(0);
    const Increase=()=>{
    setCounter(counter+1)
  }


    const [show,setShow ]= useState(false);
    const proudct=()=>{
      if(show ==false){
        setShow(true);
      }else setShow(false);
    };
  







  return (
    <div>
      <h1>
        Counter is {counter}
      </h1>
     <button onClick={Increase} >Increase</button>
     <button onClick={proudct}>Show Proudct</button>
     {show && (
        <div>
          <h2>Product Details</h2>
          <p>Name: iPhone</p>
          <p>Price: 1000$</p>
          <p>Description: This is iPhone</p>
        </div>
      )}
     </div>
  )

}
