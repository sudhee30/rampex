
import { useState,useEffect,useRef } from "react";
function Task1(){
    var [num,setNum] = useState()
    var prevNum=useRef()
    useEffect(()=>{
        prevNum.current=num
    },[num])
    return(
        <div>
            <h1>This is Task</h1>
            <input type ="number" value={num} onChange={(e)=> setNum(e.target.value)}></input>
            <h2>My Current Render is {num}</h2>
            <h3>My previous render is {prevNum.current}</h3>
            
        </div>
    )

}
export default Task1;