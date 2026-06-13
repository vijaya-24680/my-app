function Profile(){
    /*const name="Aryan"
    const price=1299
    return(
        <div>
            <h2>Hello{name}</h2>
            <p>Price of the product is{price}</p>
        </div>
    )
}
export default Profile;*/

   const items=["idli","dosa","vada"]
   return(
      <div>
        <ul>
            {items.map((item)=>{
                return <li key={item}>{item}</li>
            })}
        </ul>
      </div>
    )
}
export default Profile;  