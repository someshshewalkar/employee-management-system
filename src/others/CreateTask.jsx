import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !task.title ||
      !task.description ||
      !task.date ||
      !task.assignTo ||
      !task.category
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      ...task,
      active: false,
      newTask: true,
      complete: false,
      failed: false,
    };
    const updatedUserData = userData.map((user) => {
      if (user.firstName === task.assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            new: (user.taskCount?.new || 0) + 1, 
          },
        };
      }
      return user;
    });

    setUserData(updatedUserData);
    // console.log(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));

    // Reset form
    setTask({
      title: "",
      description: "",
      date: "",
      assignTo: "",
      category: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitHandler}
        className="flex w-full flex-wrap items-start justify-between"
      >
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              name="title"
              value={task.title}
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              name="date"
              value={task.date}
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              name="assignTo"
              value={task.assignTo}
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              name="category"
              value={task.category}
              onChange={handleChange}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc."
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="text-sm py-2 w-full h-44 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
