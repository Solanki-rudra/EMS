import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

function Login({handleLogin}) {
    const [loginData, setLoginData] = useState({email:'',password:''});
    useEffect(() => {
        getLocalStorage()
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(loginData.email, loginData.password)
    }
  return (
    <div className='w-screen h-screen bg-[#1c1c1c] text-white flex items-center justify-center'>
      <div className='m-5 w-[30%] p-10 border-2 border-red-800 rounded '>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>

            <input
             value={loginData.email}
             onChange={(e) => setLoginData(pv=>({...pv,email:e.target.value}))}
             type="email"
             placeholder='abc@xyz.com'
             className='border-red-800 bg-transparent border-2 rounded-sm focus:outline-none w-full p-3 m-3'
            />

            <input 
            value={loginData.password} 
            onChange={(e) => setLoginData(pv=>({...pv,password:e.target.value}))} 
            type="password" 
            placeholder='****' 
            className='border-red-800 bg-transparent border-2 rounded-sm focus:outline-none p-3 w-full m-3'
            />

            <button className='bg-red-800 rounded-lg w-fit px-5 py-2 m-2'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
