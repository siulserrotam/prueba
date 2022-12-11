import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './regi.css';
const Registro = () => {
  const navigate= useNavigate()
const handleClick = (e)=>{
e.preventDefault()
navigate('/Pokemon')
}
  return (
    <div className="regi-wrapper">
    <h1>Registro</h1>
      <form>
        <div>
        <label>
        <p>Username</p>
        <input type="text" />
      </label>  
        </div>
        <div>
        <label>
        <p>Email</p>
        <input type="Email" />
      </label>  
        </div>
      <div>
      <label>
      <p>Password</p>
        <input type="password" />
      </label>
      </div>
       
      <div>
        <button onClick={handleClick} type="submit">Aceptar</button>
      </div>
    </form>
  
    </div>
  )
}

export default Registro