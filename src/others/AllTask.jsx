import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const[userData,setUserData] = useContext(AuthContext)
//   console.log(authdata.employees)
  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5 rounded   '>
         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5 bg-red-600'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5 bg-red-600'>New Task</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-600'>Active Task</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-600'>Completed</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-600'>Failed Task</h3>



            </div>
       <div className=' overflow-auto'> {
            userData.map((elem,idx)=>{
                return          <div key={idx} className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'  >{elem.firstName } </h2>
                <h3 className='w-1/5 text-lg font-medium text-blue-600' >{elem.taskCount.new}</h3>
                <h5 className='w-1/5 text-lg font-medium text-yellow-400' >{elem.taskCount.active}</h5>
                <h5 className='w-1/5 text-lg font-medium ' >{elem.taskCount.complete}</h5>
                <h5 className='w-1/5 text-lg font-medium text-red-600' >{elem.taskCount.failed}</h5> 
            </div>
    
            })
        }</div>

        {/* <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Somesh</h2>
            <h3>Make a UI desgin</h3>
            <h5>Status</h5>
        </div>

        <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Somesh</h2>
            <h3>Make a UI desgin</h3>
            <h5>Status</h5>
        </div>

        <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Somesh</h2>
            <h3>Make a UI desgin</h3>
            <h5>Status</h5>
        </div>

        <div className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Somesh</h2>
            <h3>Make a UI desgin</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask