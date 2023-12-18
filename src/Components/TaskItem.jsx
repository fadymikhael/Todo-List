import React, { useState } from 'react'
import Button from './Button.jsx'
import PropTypes from 'prop-types'

const TaskItem = ({ taskItem, taskList, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(taskItem.task)

  const handleEdit = () => {
    setIsEditing(true)
    setEditedTask(taskItem.task)
  }

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this task?')
    if (confirmed) {
      const updatedTasks = taskList.filter((item) => item.id !== taskItem.id)
      setTaskList(updatedTasks)
    }
  }

  const handleSaveTask = () => {
    const updatedTasks = [...taskList]
    const currentDate = new Date().toLocaleString()

    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === taskItem.id) {
        updatedTasks[i] = {
          ...updatedTasks[i],
          task: editedTask,
          dateTime: currentDate,
        }
        break
      }
    }

    setTaskList(updatedTasks)
    setIsEditing(false)
  }

  return (
    <div key={taskItem} className="bg-gray-200 p-3 mb-4 mx-1 rounded-md">
      {isEditing ? (
        <>
          <input
            className="border border-black px-3 py-2 mr-2 rounded"
            onChange={(e) => setEditedTask(e.target.value)}
            type="text"
            value={editedTask}
          />
          <Button text="Save" onClick={handleSaveTask} type="bg-blue-500" />
        </>
      ) : (
        <>
          <p className="mb-2 font-semibold">Task: {taskItem.task}</p>
          <p className="mb-2 font-semibold">Date & Time: {taskItem.dateTime}</p>
          <div className="flex">
            <Button text="Delete task" onClick={handleDelete} type="bg-red-500" />
            <Button text="Edit task" onClick={handleEdit} type="bg-blue-500" />
          </div>
        </>
      )}
    </div>
  )
}

TaskItem.propTypes = {
  taskItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    task: PropTypes.string,
    dateTime: PropTypes.string,
  }).isRequired,
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired,
}

export default TaskItem
