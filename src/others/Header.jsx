import React, { useState } from 'react'

const Header = (props) => {
  const [userName, setUserName] = useState("Admin")

  
  console.log(props.data,)
  const logOutUser =()=>{
    localStorage.setItem('loggedInUser','');
   props.changeUser('');
    // window.location.reload();

  }
  return (
    
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium '>Hello, <br /> <span className='text-3xl font-semibold'> {props.data ? props.data.firstName : "Admin"}👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium '>Log Out</button>
        </div>
    
  )
}

export default Header