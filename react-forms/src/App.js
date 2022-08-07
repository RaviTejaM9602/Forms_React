import React, {useState} from "react"
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
   
  console.log(firstName);

  function handleChange(event) {
    setFirstName(event.target.value)
  }
  return (
     <form className="App">
        <input 
          type="text" 
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={firstName} 
        />


     </form>
  );
}

export default App;
