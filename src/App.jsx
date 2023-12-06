import React, { useState } from "react";
import './index.css';   

function Todolist() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

   function AddTaskfnc() {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
    setTask('');
    }
  }
  function DeleteTask(index){
      const updatedTasks = [...taskList];
      updatedTasks.splice(index,1);
      setTaskList(updatedTasks);
    }
  return (
      <div className="Addtask">
          <h1 className='text-3xl text-red-500 text-center'>Todo list</h1>

          <input onChange={(e) => setTask(e.target.value)} type="text"value={task}/>
          <button className='text'onClick={AddTaskfnc}>Add task</button>

          <div> {taskList.map((task, index) => (
          <div key={index}>{task}
            <button onClick={() => DeleteTask(index)}>Delete Task</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todolist;
