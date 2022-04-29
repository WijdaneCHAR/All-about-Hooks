import {React , useReducer} from 'react'

export default function UseReducer() {
    const initialState = 
        {
          bgcolor: "#007EB2",
          buttoncolor: "#f6f6f6"
        }
    ;

    const reducer = (state, action) => {
        switch (action.type) {
          case "first":
            return { 
                bgcolor : state.buttoncolor,
                buttoncolor : state.bgcolor
                   };
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer(reducer, initialState);


    const buttonStyle = {   color : state.buttoncolor , 
                            fontSize:'23px' ,
                            padding:'10px' , 
                            backgroundColor: state.bgcolor , 
                            cursor:'pointer',
                            borderRadius:'5px'
                        } 
  return (
    <div>
        <h1 style={{color: state.buttoncolor}} > REACT USEREDUCER HOOK : </h1>
        <button style={buttonStyle}  onClick={() => dispatch({type: 'first'})}> Click Here</button>
    </div>
  )
}
