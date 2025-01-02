import { useState, useEffect } from "react";
import axios from 'axios';

function Task2() {
    /*
    var [text, setText] = useState("KOngu")
    useEffect(()=>{
        console.log(text)
        setText("KEC")
        
    },[])
    return (
        <div>
            <h1>UseEffect Example</h1>
            <input type="text" placeholder="Enter your text" value={text} onChange={(e) => {setText( e.target.value) }} ></input>
            <h2>
                Text typed is {text}
            </h2>

        </div>
    )*/
    var [post, setPost] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos/')
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <section>
            <h1>Fetching data from Json Placeholder API</h1>
            {/* <h2>Post are {post}</h2> */}
            <image>
                {post.map((data)=>(<image key = {data.userId}>{data.title}</image>))}
            </image>
        </section>
    )
}
export default Task2;