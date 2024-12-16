import React from 'react'

function AcceptTask({task}) {
  
  return (
    <div className='p-5 rounded-xl flex-shrink-0 bg-red-400 min-h-fit min-w-fit h-[350px] w-[25%]'>
        <div className='flex justify-between items-baseline'>
            <div className='bg-red-600 p-2 rounded w-fit px-4'>{task.category}</div>
            <h1 className='text-lg font-semibold'>{task.taskDate}</h1>
        </div>
        <h1 className='my-5 font-bold text-3xl'>{task.taskTitle}</h1>
        <p className='font-semibold text-md'>{task.taskDescription}</p>
        <div className='flex my-4 gap-3'>
          <button className='bg-green-600 rounded-md p-1 px-2 text-sm font-bold'>Mark as Completed</button>
          <button className='bg-red-600 rounded-md p-1 px-2 text-sm font-bold'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
