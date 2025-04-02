
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [details, setDetails] = useState({
    name: "",
    address: "",
    email: "",
    mobile: ""
  })

  const [error, setError] = useState({})

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  function validName(str) {
    let flag = false
    str = str.toLowerCase()
    for (let v of str) {
      if (v == " ") {
        continue
      } else if (v >= "a" && v <= "z") {
        flag = true
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      return true
    } else {
      return false
    }
  }

  function formValidation() {
    let { name, address, email, mobile } = details
    let isValid = true
    let obj = {}
    if (!validName(name)) {
      obj.name = "Name should contain only letters"
      isValid = false
    }
    const addressRegex = /^[a-zA-Z0-9\s,]+$/
    if (!addressRegex.test(address)) {
      obj.address = "Address should not contain special characters"
      isValid = false
    } 
    if (!email.includes('@') && !email.includes('.com')) {
      obj.email = "Email should contain @ and .com"
      isValid = false
    }
    if (mobile.length > 10) {
      obj.mobile = "Mobile number should not be more than 10 characters"
      isValid = false
    }
    setError(obj)
    return isValid
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(formValidation()){
      console.log("Form submitted successfully", details);
      setDetails({
        name: "",
        address: "",
        email: "",
        mobile: ""
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>&nbsp;&nbsp;
        <input type="text" name="name" value={details.name} onChange={handleChange} />
        <br />
        {error.name && <span className="errorMessage">{error.name}</span>}
        <br />
        <label htmlFor="address">Address:</label>&nbsp;&nbsp;
        <input type="text" name="address" value={details.address} onChange={handleChange} />
        <br />
        {error.address && <span className="errorMessage">{error.address}</span>}
        <br />
        <label htmlFor="email">Email:</label>&nbsp;&nbsp;
        <input type="text" name="email" value={details.email} onChange={handleChange} />
        <br />
        {error.email && <span className="errorMessage">{error.email}</span>}
        <br />
        <label htmlFor="mobile">Mobile:</label>&nbsp;&nbsp;
        <input type="text" name="mobile" value={details.mobile} onChange={handleChange} />
        <br />
        {error.mobile && <span className="errorMessage">{error.mobile}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
