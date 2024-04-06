import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const BottomCon=(props)=>{
    const[backcolor,setBackcolor]=useState("white");
    const[showfunc,setShowFunc]=useState(false)

    const pickColor=(event)=>{
        console.log(event.target.value);
        setBackcolor(event.target.value)
    }

    const visiblefunc=()=>{
        setShowFunc(true)
    }
    const hidefunc =()=>{
        setShowFunc(false)
    }
    return(
        <>
            <div className="itemBox" style={{backgroundColor:backcolor}} onMouseEnter={visiblefunc} onMouseLeave={hidefunc}>
                <h1 className="titlex">{props.title}</h1>
                <p className="tx">{props.tx}</p>
                <div className="confunc">
                { showfunc && 
                <>
                    <div className="cp_wrapper">
                        <input type="color" onChange={pickColor} className="color"/>
                    </div>
                    <DeleteOutlineOutlinedIcon className="deleteico" onClick={()=>{
                        props.deleteSelectedItem(props.id);
                    }}/>
                </>
                }
                </div>
            </div>
        </>
    )
}

export default BottomCon;