import {useState}from"react";
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
};