import React from 'react';
import { useAuth } from '../../context/AuthContext';

function AllTask() {
    const { userData } = useAuth();

    return (
        <div className='p-6 border-2 flex gap-3 flex-col border-red-800 my-4 bg-slate-900 rounded-md'>
            <div className='bg-green-500 flex justify-between rounded-md p-3 font-bold'>
                <h3 className='w-1/5 text-center'>Employee Name</h3>
                <h3 className='w-1/5 text-center'>New Task</h3>
                <h3 className='w-1/5 text-center'>Active Task</h3>
                <h3 className='w-1/5 text-center'>Completed</h3>
                <h3 className='w-1/5 text-center'>Failed</h3>
            </div>
            {
                userData.employee.map((employee, index) => (
                    <div
                        key={index}
                        className='border-2 border-emerald-400 w-full flex rounded-md p-3 font-bold'
                    >
                        <h3 className='w-1/5 text-center'>{employee.firstName}</h3>
                        <h3 className='w-1/5 text-center'>{employee.taskCounts.newTask}</h3>
                        <h3 className='w-1/5 text-center text-green-500'>{employee.taskCounts.active}</h3>
                        <h3 className='w-1/5 text-center text-blue-500'>{employee.taskCounts.completed}</h3>
                        <h3 className='w-1/5 text-center text-red-500'>{employee.taskCounts.failed}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default AllTask;
