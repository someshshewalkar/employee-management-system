import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import TaskLisst from '../TaskList/TaskLisst'



const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen  '>
        <Header data={data}/>
        <TaskNumber data={data}/>
        <TaskLisst/>
        
      
        
        
    </div>
  )
}

export default EmployeeDashboard