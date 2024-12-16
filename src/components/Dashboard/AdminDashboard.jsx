import React from 'react'
import Header from '../../Shared/employee-dash/Header'
import CreateTask from '../../Shared/admin-dash/CreateTask'
import AllTask from '../../Shared/admin-dash/AllTask'

const AdminDashboard = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] text-white'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
