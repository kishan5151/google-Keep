import React,{useState} from "react";
import Nav from "./Nav";
import "./App.css"
import Left from "./Left";
import Right from "./Right";

const App=()=>{
  const[pro,setPro]=useState(false)
  const changeAlign=()=>{
    setPro(!pro)
  }
  return(
    <>
      <Nav changeAlign={changeAlign}/>
      <div className="bodycon">
        <div className="leftbody">
          <Left/>
        </div>
      <div className="rightbody">
          <Right pro={pro}/>
      </div>

      </div>
    </>
    
  )
}

export default App;