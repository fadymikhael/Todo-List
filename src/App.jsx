import './index.css';
import React, { useState } from "react";

function Todolist() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function AddTaskfnc() {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(''); 
      console.log(AddTaskfnc)
    }
  }
  return (
     
    <div className="Addtask">
    <h1 className='text-3xl text-red-500 text-center'>Todo list</h1>
    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
     <button className='text' onClick={AddTaskfnc}> Add task  </button>
     <ul>
        {taskList.map((taskItem, index) => (
           <li key={index}>{taskItem}</li>
        
        ))} 
      </ul>
    </div>
    
  );
}

export default Todolist;