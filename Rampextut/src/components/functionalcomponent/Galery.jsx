import {useState} from "react";
function Gallery(){
    var [counter,setcount]=useState(0);
    function increment(){
        setcount(counter+1)
    }
    function decrement(){
        setcount(counter-1)
    }
    function reset(){
        setcount(counter=0)
    }
    return(
        <div>
            <h1>This is Gallery page</h1>
            <h2 style = {{textAlign:"center"}}>
                Learning State concept
            </h2>
            <h3>The state of my varbiable is {counter}</h3>
            <button onMouseOver ={increment}>Increment</button>
            <button onDoubleClick ={decrement}>Deccrement</button>
            <button onClick ={reset}>Reset</button>

        </div>
    )



}
export default Gallery;