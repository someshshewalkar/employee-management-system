import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; 
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = () => {
  const [userData] = useContext(AuthContext);

  const tasks = userData?.[0]?.tasks || []; 
  return (
    <div id="tasklist" className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5">
      {
        tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem.complete) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />;
          }
          return null; 
        })
      }
    </div>
  );
};

export default TaskList;
