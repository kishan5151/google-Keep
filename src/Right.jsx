import React, { useState } from "react";
import BottomCon from "./BottomCom";

const Right=(props)=>{
    const[show,setShow]=useState(false)
    const[list,setList]=useState([])
    const[object,setObject]=useState({
        title:"",
        tx:""
    })
    const saveconti=(event)=>{
        const value=event.target.value;
        const name=event.target.name
        setObject((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        });
    }
    const givenText=()=>{
        setShow(true)
    }
    const hidetext=()=>{
        setShow(false)
        if(object.title != "" || object.tx !="" ){
            setList((preVal)=>{
                return[...preVal,{title:object.title,tx:object.tx}]
            })
        }
        setObject({
            tx:"",
            title:""
        })
    }
    const deleteItem=(id)=>{
        setList((preVal)=>{
            return preVal.filter((arrEle,index)=>{
                return index != id; 
            })
        })
    }

    return(
        <>
            <div className="topcon">
            {
                show && <input className="inputf title" type="text"
                    placeholder="Title"
                    onChange={saveconti}
                    name="title"
                    value={object.title} />
            }
                <textarea type="text" className="inputf"
                    placeholder="Take a note..."
                    onSelect={givenText}
                    onChange={saveconti}
                    name="tx"
                    value={object.tx}
                />
            </div>
            <div className="bottomcon" onClick={hidetext}>
                <div className="mainbottomcon" style={{flexDirection: props.pro ? "column" : "row"}}>
                    {
                        list.map((val,index)=>{
                            return(
                                <BottomCon key={index}
                                    id={index}
                                    title={val.title}
                                    tx={val.tx}
                                    deleteSelectedItem={deleteItem}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Right;