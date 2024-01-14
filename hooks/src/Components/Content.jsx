import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Context';

const UseEffect = () => {

//use State

let [count,setCount]=useState(0)
let [displayPara, setDisplayPara] = useState(false);
let {darkTheme,setDarkTheme}= useContext(AppContext)


const IncreaseCount=()=>{
  setCount(count+1)
}

const DisplayPara=()=>{
  alert("Content button clicked")
  setDisplayPara(!displayPara);
}

const Theme=()=>{
  setDarkTheme(!darkTheme);
}

//use Effect

useEffect(() => {
    return()=>{
        console.log(count)
    }
   ;
  },[count]); 

  return (
    <div>
       <div>
      <button style={{marginBottom:"50px",
                     border:"2px solid #999999",}}
              onClick={Theme}>Toggle</button>
    </div>

    <div style={{backgroundColor:darkTheme?"#333333":"#999999",
                 color:darkTheme?"white":"black",
                 width:"70vw",
                 padding:"50px",
            
    }}>

      <p style={{display: displayPara ? "block" : "none"}}>He hid under the covers hoping that nobody would notice him there. It really didn't make much sense since it would be obvious to anyone who walked into
      the room there was someone hiding there, but he still held out hope. He heard footsteps coming down the hall and stop in front in front of the bedroom door
      He heard the squeak of the door hinges and someone opened the bedroom door. He held his breath waiting for whoever was about to discover him, but they
      never did</p>
      <button onClick={DisplayPara}>Content</button>
      <h3>{count}</h3>
      <button onClick={IncreaseCount}>Like</button>
     </div>
    </div>
    
  )
}

export default UseEffect