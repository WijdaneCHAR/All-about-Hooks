import React,{useState} from 'react'

export default function UseState() {
    // Declararion of a new state variable : 
    const [buttonColor,setButtonColor] = useState("#007EB2");
    const [bgColor,setBgColor] = useState("#f6f6f6");

    const buttonStyle = {   color : buttonColor , 
                            fontSize:'23px' ,
                            padding:'10px' , 
                            backgroundColor:bgColor , 
                            cursor:'pointer',
                            borderRadius:'5px'
                        }
  return (
    <div>
        <h1 style={{color: "#007EB2"}} > REACT USESTATE HOOK : </h1>
        <button style={buttonStyle}  onClick={() => {setButtonColor(bgColor) ; setBgColor(buttonColor)}}> Click Here</button>
    </div>
  )
}
