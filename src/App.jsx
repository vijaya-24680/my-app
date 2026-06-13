{/*import Profile from'./component1.jsx'*/}
{/*import "./APP.css";
import Welcome from "./welcome";*/}
function App(){
  return (
    <div>
      {/*<Profile/>*/}
      {/*<Welcome name="Priya"/>
      <Welcome name="Rahul"/>*/}
      <h1> Mywebsite</h1>
      {isLoggedin ? (
        <button ><Logout></Logout></button>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
}
export default App;

  

