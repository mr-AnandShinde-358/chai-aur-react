import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username,setUsername]= useState('');
    const [password,setPassword] =useState('');
   const  {setUser} = useContext(UserContext)

   const submitHandle=(e)=>{
    e.preventDefault();
    setUser({username,password})
   }

  return (
    <div>
      <input value={username} type="text" placeholder='Enter username' onChange={(e)=>{setUsername(e.target.value)}}  />

      <input value={password} type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' />
      <button onClick={submitHandle}>submit</button>

    </div>
  )
}

export default Login
