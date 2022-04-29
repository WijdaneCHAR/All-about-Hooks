import {React,useContext,createContext} from "react";

export default function UseContext() {
    const themes = {
        first: {
          bgcolor: "#007EB2",
          buttoncolor: "#f6f6f6"
        },
        second: {
          bgcolor: "#f6f6f6",
          buttoncolor: "#007EB2"
        }
      };
    //CREATE THE CONTEXT : 
    const  ThemesContext = createContext(themes.second);

    const theme = useContext(ThemesContext);
    
    const buttonStyle = {   color :  theme.buttoncolor  , 
        fontSize:'23px' ,
        padding:'10px' , 
        backgroundColor:theme.bgcolor , 
        cursor:'pointer',
        borderRadius:'5px'
    } 
    return (
    <div>
    <ThemesContext.Provider value={themes.first}>
    <h1 style={{color: theme.buttoncolor}} > REACT USECONTEXT HOOK : </h1>
    <button style={buttonStyle}>
    Click Here
    </button>
    </ThemesContext.Provider>
    </div>
  )
}
