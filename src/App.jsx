import React, { useState } from 'react'
import './index.css'
import './App.css'
import Button from './Button.jsx'

function Todolist() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [editIndex, setEditIndex] = useState(-1)
  const [editedTask, setEditedTask] = useState('')

  function addTask() {
    if (task.trim() !== '') {
      const currentDate = new Date().toLocaleString()
      const newTask = {
        task: task,
        dateTime: currentDate,
      }
      setTaskList([...taskList, newTask])
      setTask('')
    }
  }

  function confirmDeleteTask(index) {
    const confirmation = window.confirm('Are you sure you want to delete this task?')
    if (confirmation) {
      deleteTask(index)
    }
  }

  function deleteTask(index) {
    const updatedTasks = [...taskList]
    updatedTasks.splice(index, 1)
    setTaskList(updatedTasks)
  }

  function editTask(index) {
    setEditIndex(index)
    setEditedTask(taskList[index].task)
  }

  function saveTask() {
    const updatedTasks = [...taskList]
    const currentDate = new Date().toLocaleString()
    updatedTasks[editIndex].task = editedTask
    updatedTasks[editIndex].dateTime = currentDate
    setTaskList(updatedTasks)
    setEditIndex(-1)
    setEditedTask('')
  }

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-80 h-70 flex flex-col items-center bg-red-400 mt-4 rounded-md">
        <h1 className="text-center text-3xl mb-4 font-serif font-semibold">Todo list</h1>
        <div className="mb-3 flex items-center">
          <input
            className="border border-black px-3 py-2 mr-2 rounded"
            onChange={(e) => setTask(e.target.value)}
            type="text"
            value={task}
          />
          <Button text="Add task" onClick={addTask} type="bg-green-500" />
        </div>
        <div>
          {taskList.map((taskItem, index) => (
            <div key={index} className="bg-gray-200 p-3 mb-4 mx-1 rounded-md">
              {editIndex === index ? (
                <>
                  <input
                    className="border border-black px-3 py-2 mr-2 rounded"
                    onChange={(e) => setEditedTask(e.target.value)}
                    type="text"
                    value={editedTask}
                  />
                  <Button text="Save" onClick={saveTask} type="bg-blue-500" />
                </>
              ) : (
                <>
                  <p className="mb-2 font-semibold">Task: {taskItem.task}</p>
                  <p className="mb-2 font-semibold">Date & Time: {taskItem.dateTime}</p>
                  <div className="flex">
                    <Button
                      text="Delete task"
                      onClick={() => confirmDeleteTask(index)}
                      type="bg-red-500"
                    />
                    <Button text="Edit task" onClick={() => editTask(index)} type="bg-blue-500" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Todolist
