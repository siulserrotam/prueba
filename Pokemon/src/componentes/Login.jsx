import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.css';
const Login = () => {
  const navigate= useNavigate()
const handleClick = (e)=>{
e.preventDefault()
navigate('/Pokemon')
}

  return (
    <div className="login-wrapper">
    <h1>Ingreso</h1>
      <form>
      <label>
        <p>Email</p>
        <input type="email" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button onClick={handleClick} type="submit">Aceptar</button>
      </div>
    </form>
  
    </div>
  )
}
export default Login