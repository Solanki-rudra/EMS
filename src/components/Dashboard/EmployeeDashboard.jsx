import React from 'react'
import Header from '../../Shared/employee-dash/Header'
import TaskListNumber from '../../Shared/employee-dash/TaskListNumber'
import TaskList from '../../Shared/employee-dash/TaskList'

function EmployeeDashboard({data}) {
  return (
    <div className='p-5 h-screen w-screen bg-[#1c1c1c] text-white'>
      <Header data={data} />
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
