import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-6 bg-emerald-400'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-6 bg-yellow-400'>
            <h2 className='text-3xl font-semibold '>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
    </div>
  )
}

export default TaskNumber