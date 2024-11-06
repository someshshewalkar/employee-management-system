import React from 'react'
import Header from '../../others/Header'
import TaskNumber from '../../others/TaskNumber'
import TaskLisst from '../TaskList/TaskLisst'



const EmployeeDashboard = (props) => {
  // console.log( "this is data ",data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen  '>
        <Header  changeUser= {props.changeUser} data={props.data}/>
        <TaskNumber data={props.data}/>
        <TaskLisst data={props.data}/>
        
      
        
        
    </div>
  )
}

export default EmployeeDashboard