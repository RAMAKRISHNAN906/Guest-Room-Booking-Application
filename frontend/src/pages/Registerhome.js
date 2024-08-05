import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Registerhome() {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState("");
  const Nav=useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending the data to a server
    const formData=new FormData();
    formData.append('name',name)
    formData.append('price',price)
    formData.append('description',description)
    formData.append('file',image)
    axios.post('http://localhost:3001/registerhome',formData,{
      headers:{
        "Content-Type":'multipart/form-data'
      }
    })
    .then(result=>{
      console.log("ok")
      Nav('/rooms')
    })
    .catch(err=>{
      console.error(err);
    })
  };

  return (
    <div className="App">
      <h1>Register Your House</h1>
      <form onSubmit={handleSubmit} className="register-form">
      <label>
          House Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Price/Night:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
         
        <button className='button-reg' type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registerhome;
