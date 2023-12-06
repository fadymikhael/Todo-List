import React, { useState } from "react";
import './index.css';   

function Todolist() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(); 
  const [editdTask, setEditdTask] = useState(''); 

  function AddTaskfnc() {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  }

  function DeleteTask(index) {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  }

  function EditTask(index) {
    setEditIndex(index); 
    setEditdTask(taskList[index]);
  }

  function SaveTask() {
    const updatedTasks = [...taskList];
    updatedTasks[editIndex] = editdTask; 
    setTaskList(updatedTasks);
    setEditdTask(''); 
    setEditIndex(); 
  }

  return (
    <div className="Addtask">
      <h1 className='text-3xl text-red-500 text-center'>Todo list</h1>
      <input onChange={(e) => setTask(e.target.value)} type="text" value={task} />
      <button className='text' onClick={AddTaskfnc}>Add task</button>
      <div>
        {taskList.map((taskItem, index) => (
          <div key={index}>
            {editIndex === index ? (
              <>
                <input onChange={(e) => setEditdTask(e.target.value)} type="text" value={editdTask} />
                <button onClick={SaveTask}>Save</button>
              </>
            ) : (
              <>
                {taskItem}
                <button onClick={() => DeleteTask(index)}>Delete Task</button>
                <button onClick={() => EditTask(index)}>Edit Task</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todolist;
