import React, {useState} from "react"
import './App.css';

function App() {
  const [formData, setFirstName] = useState({
       firstName:"",
       lastName:"",
       email: "",
       comments:""
  });
   
  console.log(formData);

  function handleChange(event) {
    setFirstName((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
     <form className="App">
        <input 
          type="text" 
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName} 
        />

        <input 
          type="text" 
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName} 
        />

        <input 
          type="email" 
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email} 
        />

        <textarea 
             placeholder="Comments"
             onChange={handleChange}
             name="comments"
             value={formData.comments}  />

     </form>
  );
}

export default App;
