import React, { useEffect, useState } from 'react'

const CreateTask = () => {
  const [taskData, setTaskData] = useState(
  {
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    category: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false
  });
  const [asignTo, setAsignTo] = useState('');
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employees'))
    setEmployeeData(storedData)
  }, [employeeData]);

  const handleCreateTask = (e) => {
    e.preventDefault()

    let updatedEmployeesData =  employeeData.map(employee =>{
      if(employee.firstName === asignTo){
        return {
          ...employee,
          tasks:[...employee.tasks,taskData],
          taskCounts:{...employee.taskCounts,newTask:employee.taskCounts.newTask+1}
        }
      }else{
        return employee
      }
    })
    localStorage.setItem('employees',JSON.stringify(updatedEmployeesData))
    setEmployeeData(updatedEmployeesData)
  }

  return (
    <div className='p-4 px-6 border-2 border-red-800 my-4 bg-slate-900 rounded-md'>
      <form onSubmit={handleCreateTask} className='flex justify-center items-center'>
        <div className='w-1/2 '>
            <div className='flex flex-col gap-2 mb-3'>
                <label htmlFor="taskTitle">Task Title</label>
                <input 
                required
                value={taskData.taskTitle}
                onChange={(e)=>setTaskData(pv=>({...pv,taskTitle:e.target.value}))}
                className='bg-transparent p-2 rounded-sm border-2 border-gray-500 w-[90%]' type="text" id='taskTitle' placeholder='Make a UI Design'/>
            </div>
            <div className='flex flex-col gap-2 mb-3'>
                <label htmlFor="date">Date</label>
                <input
                required
                value={taskData.taskDate}
                onChange={(e)=>setTaskData(pv=>({...pv,taskDate:e.target.value}))}
                 className='bg-transparent p-2 rounded-sm border-2 border-gray-500 w-[90%]' type="date" id='date' />
            </div>
            <div className='flex flex-col gap-2 mb-3'>
                <label htmlFor="employeeName">Asign to</label>
                <input
                required
                value={asignTo}
                onChange={(e)=>setAsignTo(e.target.value)}  
                 className='bg-transparent p-2 rounded-sm border-2 border-gray-500 w-[90%]' type="text" id='employeeName' placeholder='Employee Name'/>
            </div>
            <div className='flex flex-col gap-2 mb-3'>
                <label htmlFor="category">Category</label>
                <input
                required
                value={taskData.category}
                onChange={(e)=>setTaskData(pv=>({...pv,category:e.target.value}))}
                 className='bg-transparent p-2 rounded-sm border-2 border-gray-500 w-[90%]' type="text" id='category' placeholder='design, dev, etc'/>
            </div>
        </div>
        <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="description">Description</label>
            <textarea
            required
                value={taskData.taskDescription}
                onChange={(e)=>setTaskData(pv=>({...pv,taskDescription:e.target.value}))}
                 rows={9} className='bg-transparent p-2 rounded-sm border-2 border-gray-500 my-2' id="description"></textarea>
            <button className='bg-red-800 p-4 rounded-lg '>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
