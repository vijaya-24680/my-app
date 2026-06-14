import {useState,useEffect} from "react"
const LifeCycle=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((data)=>setPosts(data))
        .catch((error)=>console.log(error)); 
    },[]);
    return (
        <div>
            <h2>Posts List</h2>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
export default LifeCycle