const Change = ()=>{
    function handleChange(event){
        console.log("you typed",event.target.value)
    }
    return(
        <div>
            <input onChange={handleChange} placeholder="Type here"/>
        </div>
    )
}
export default Change;