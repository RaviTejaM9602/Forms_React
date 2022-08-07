import React, {useState} from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true
    }
)

function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
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

       <input 
             type="checkbox" 
             id="isFriendly" 
             checked={formData.isFriendly}
             onChange={handleChange}
             name="isFriendly"
         />
         <label htmlFor="isFriendly">Are you friendly?</label>
         <br />

     </form>
  );
}

export default App;
