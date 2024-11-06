import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]); 

  const handleButtonClick = (data) => {
    setSelectedTask(data);

    const updatedUserData = userData.map((user) => {
      if (user.tasks && user.tasks.some((task) => task.title === data.title)) {
        return {
          ...user,
          tasks: user.tasks.map((task) => {
            if (task.title === data.title) {
              return {
                ...task,
                active: true,
                newTask: false,
              };
            }
            return task;
          }),
          taskCount: {
            ...user.taskCount, 
            new: user.taskCount?.new > 0 ? user.taskCount.new - 1 : 0, 
                        active: (user.taskCount?.active || 0) + 1, 
          },
        };
      }
      return user;
    });

    setUserData(updatedUserData); // Update context
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-emerald-400 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <div className="text-sm mt-2">{data.description}</div>
      <div className='mt-4'>
        <button onClick={() => handleButtonClick(data)} className='w-full px-1 py-2 bg-green-600 rounded text-sm'>
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
