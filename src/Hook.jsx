/*import {useState}from"react";
export const Hook=()=>{
    const [count, setCount]=useState(0);
    function updatedValue(){
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={updatedValue}>Likes:{count}</button>
        </div>
    );
};*/
import {useState}from"react";
export const Hook=()=>{
    const [mode, setMode]=useState("veg");
    return(
        <div>
            <h2>Mode:{mode}</h2>
            <button onClick={()=>setMode("veg")}>Likes:Veg</button>
            <button onClick={()=>setMode("Non veg")}>Likes:Non Veg</button>
        </div>
    );
}