import { useState, useEffect } from "react";
import axios from 'axios';

function UseEffect() {
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
            .get('https://jsonplaceholder.typicode.com/posts/')
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
            <ol>
                {post.map((data)=>(<li key = {data.userId}>{data.title}</li>))}
            </ol>
        </section>
    )
}
export default UseEffect;