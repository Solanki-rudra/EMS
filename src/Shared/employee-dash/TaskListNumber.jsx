import React from 'react'

function TaskListNumber({data}) {
  const bgColor = (index) => {
    switch(index){
      case 0 : return 'bg-red-400'
      case 1 : return 'bg-green-400'
      case 2 : return 'bg-blue-400'
      case 3 : return 'bg-pink-400'
    }
  }
  console.log(data)
  return (
    <div className='w-full overflow-auto flex gap-6 justify-start items-center py-10'>
      {Object.entries(data.taskCounts).map((task,index)=>(
        <div key={index} className={`p-7 rounded-xl ${bgColor(index)} text-3xl font-bold min-w-fit w-[20%]`}>
        <h1>{task[0]}</h1>
        <h1>{task[1]}</h1>
      </div>
      ))}
    </div>
  )
}

export default TaskListNumber
