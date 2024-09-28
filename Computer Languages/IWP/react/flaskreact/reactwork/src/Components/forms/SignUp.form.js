import React, { useState } from 'react';    
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleSignUp =  async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:7000/api/auth/createuser",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({name : formData.name , email : formData.email , age :formData.age})
    })
    const json = await response.json();
    if(json.success === false){

    }
    else {
        // document.cookie = `authToken=${json.authToken}`
        Cookies.set('authToken',json.authToken, { expires: 7 })
        Cookies.set('mailId',formData.email, { expires: 7 })
        navigate("/test");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="age"
          id="age"
          name="age"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit"  disabled = {formData.age<18} onClick={handleSignUp}>Submit</button>
    </form>
  );
};

export default SignUpForm;
