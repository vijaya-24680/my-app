import {useState} from "react"
export const Form=()=>{
    const[name,SetName]=useState("")
    function handleSubmit(e){
        e.preventDefault()  //stops the page reload
        console.log("welcome",name)
        SetName("");

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e)=SetName(e.target.value)} type="text"/>
                <button>Submit</button>
            </form>
        </div>
    );
};