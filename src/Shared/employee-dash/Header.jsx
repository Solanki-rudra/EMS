import React from 'react'
import { useAuth } from '../../context/AuthContext';

function Header({data={firstName:'admin'}}) {
    const {setUser} = useAuth()
  

  const handleLogOut = () => {
  if(window.confirm('Are you sure you want to Log Out?')){
    localStorage.removeItem('loggedInUser');
    setUser(null)
  }
  }

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='text-4xl font-bold'><span className='text-3xl font-semibold'>Hello</span> <br /> {data.firstName} 👋</div>
      <button onClick={handleLogOut} className='bg-red-800 rounded-lg w-fit px-5 py-2 m-2'>Log Out</button>
    </div>
  )
}

export default Header
