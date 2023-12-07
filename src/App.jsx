import React, { useState } from 'react'
import './index.css'
import './App.css'
import PropTypes from 'prop-types'

function Todolist() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [editIndex, setEditIndex] = useState()
  const [editdTask, setEditdTask] = useState('')

  const Button = ({ texte, onClick, type, index }) => {
    return (
      <button
        className={`px-2 py-2 mr-2 rounded font-semibold text-white ${type}`}
        onClick={() => onClick(index)}
      >
        {texte}
      </button>
    )
  }
  Button.propTypes = {
    texte: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    index: PropTypes.number,
  }

  function AddTaskfnc() {
    if (task.trim() !== '') {
      setTaskList([...taskList, task])
      setTask('')
    }
  }

  function confirmDeleteTask(index) {
    const confirmation = window.confirm('Are you sure you want to delete this task?')
    if (confirmation) {
      DeleteTask(index)
    }
  }

  function DeleteTask(index) {
    const updatedTasks = [...taskList]
    updatedTasks.splice(index, 1)
    setTaskList(updatedTasks)
  }

  function EditTask(index) {
    setEditIndex(index)
    setEditdTask(taskList[index])
  }

  function SaveTask() {
    const updatedTasks = [...taskList]
    updatedTasks[editIndex] = editdTask
    setTaskList(updatedTasks)
    setEditdTask('')
    setEditIndex()
  }

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-80 h-70 flex flex-col items-center bg-red-400 mt-4 rounded-md">
        <h1 className="text-center text-3xl mb-4 font-serif font-semibold">Todo list</h1>
        <div className="mb-3 flex items-center">
          <input
            className="border border-black px-3 py-2 mr-2  rounded "
            onChange={(e) => setTask(e.target.value)}
            type="text"
            value={task}
          />
          <Button texte="Add task" onClick={AddTaskfnc} type="bg-green-500" />
        </div>
        <div>
          {taskList.map((taskItem, index) => (
            <div key={index} className="bg-gray-200 p-3 mb-4 mr-1 ml-1 rounded-md">
              {editIndex === index ? (
                <>
                  <input
                    className="border border-black px-3 py-2 mr-2 rounded"
                    onChange={(e) => setEditdTask(e.target.value)}
                    type="text"
                    value={editdTask}
                  />
                  <Button texte="Save" onClick={SaveTask} type="bg-blue-500" index={index} />
                </>
              ) : (
                <>
                  {taskItem}
                  <Button
                    texte="Delete task"
                    onClick={confirmDeleteTask}
                    type="bg-red-500"
                    index={index}
                  />
                  <Button texte="Edit task" onClick={EditTask} type="bg-blue-500" index={index} />
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
