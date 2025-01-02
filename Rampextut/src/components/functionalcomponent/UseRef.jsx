
import { useState,useEffect,useRef } from "react";
function UseRef(){
    var [text,setText] = useState("")
    var prevText=useRef()
    useEffect(()=>{
        prevText.current=text
    },[text])
    return(
        <div>
            <h1>This is UseRef hook</h1>
            <input type ="text" value={text} onChange={(e)=> setText(e.target.value)}></input>
            <h2>My Current Render is {text}</h2>
            <h3>My previous render is {prevText.current}</h3>
            
        </div>
    )

}
export default UseRef;