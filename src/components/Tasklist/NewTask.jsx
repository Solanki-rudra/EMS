import React from 'react'

function NewTask({task}) {
  return (
    <div className='p-5 flex-shrink-0 rounded-xl bg-green-400 min-h-fit min-w-fit h-[350px] w-[25%]'>
        <div className='flex justify-between items-baseline'>
            <div className='bg-red-600 p-2 rounded w-fit px-4'>{task.category}</div>
            <h1 className='text-lg font-semibold'>{task.taskDate}</h1>
        </div>
        <h1 className='my-5 font-bold text-3xl'>{task.taskTitle}</h1>
        <p className='font-semibold text-md'>{task.taskDescription}</p>
        <button disabled className='bg-green-600 w-full my-4 rounded-md p-1 px-2 text-sm font-bold'>Accept Task</button>
    </div>
  )
}

export default NewTask
