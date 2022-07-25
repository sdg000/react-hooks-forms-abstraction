//FORMS ABSTRACTION -DELAYERING
import React, { useState } from "react";

function Form() {
  //state variable set to object value
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  })

  // onEvent, set name / value variables based on event target
   function nameChange(e) {
    const name = e.target.name
    let value = e.target.value

    //logic for checkbox
    if (e.target.type === "checkbox"){
      value = e.target.checked
    }

    //onEvent, copy formdata object, add "name - key" and "input - value" to formData object , and pass to setFormData.
    setFormData({
      ...formData, [name]: value
    });
  }
    
    //function to handle form submit.
    function handleSubmit(e){
      e.preventDefault()
      console.log(formData)
    }
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={nameChange} name="firstName" value={formData.firstName}/>
      <input type="text" onChange={nameChange} name="lastName" value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={nameChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
