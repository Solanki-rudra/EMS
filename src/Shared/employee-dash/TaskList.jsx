import React from 'react'
import AcceptTask from '../../components/Tasklist/AcceptTask'
import CompleteTask from '../../components/Tasklist/CompleteTask'
import FailedTask from '../../components/Tasklist/FailedTask'
import NewTask from '../../components/Tasklist/NewTask'

function TaskList({data}) {
    console.log(data)
  return (
    <div className='w-full overflow-x-scroll flex-nowrap flex gap-6 justify-start items-center pt-10 pb-2'>
        {
            data.tasks.map((task,index)=>{
                if(task.active) return  <AcceptTask key={index} task={task}  />
                if(task.newTask) return <NewTask key={index} task={task}  />
                if(task.completed) return <CompleteTask key={index} task={task}  />
                if(task.failed) return <FailedTask key={index} task={task}  />
            })
        }
    </div>
  )
}

export default TaskList
