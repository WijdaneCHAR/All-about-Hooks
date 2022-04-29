import React, { useState, useEffect } from 'react';

export default function UseEffect() {
     // Declararion of a new state variable : 
     const [buttonColor,setButtonColor] = useState("#007EB2");
     const [bgColor,setBgColor] = useState("#f6f6f6");
     const [h1Color,setH1Color] = useState(buttonColor);

     const buttonStyle = {   color : buttonColor , 
                             fontSize:'23px' ,
                             padding:'10px' , 
                             backgroundColor:bgColor , 
                             cursor:'pointer',
                             borderRadius:'5px'
                         } 
    // Receiving the latest color of the button in the h1 color :
    useEffect (()=>{
        if(buttonColor){
            setH1Color(buttonColor);
        }
    },[buttonColor])
  return (
    <div>
        <h1 style={{color: h1Color}} > REACT USEEFFECT HOOK : </h1>
        <button style={buttonStyle}  onClick={() => {setButtonColor(bgColor) ; setBgColor(buttonColor)}}> Click Here</button>
      
    </div>
  );
}