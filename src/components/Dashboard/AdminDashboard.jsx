import React, { useContext } from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = (props) => {
  
  return (
    <div className="p-7 h-screen w-full">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
