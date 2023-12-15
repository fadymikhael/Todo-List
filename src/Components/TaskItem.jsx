import React, { useState } from 'react'
import Button from './Button.jsx'
import PropTypes from 'prop-types'

const TaskItem = ({ taskItem, taskList, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(taskItem.task)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState(null)

  const handleEdit = () => {
    setIsEditing(true)
    setEditedTask(taskItem.task)
  }

  const handleDelete = (taskItem) => {
    setDeleteIndex(taskItem)
    setShowConfirmation(true)
  }

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedTasks = [...taskList]
      updatedTasks.splice(deleteIndex, 1)
      setTaskList(updatedTasks)
      setShowConfirmation(false)
      setDeleteIndex(null)
    }
  }

  const cancelDelete = () => {
    setShowConfirmation(false)
    setDeleteIndex(null)
  }

  const handleSaveTask = () => {
    const updatedTasks = [...taskList]
    const currentDate = new Date().toLocaleString()

    updatedTasks[taskItem] = {
      ...updatedTasks[taskItem],
      task: editedTask,
      dateTime: currentDate,
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
          <p className="mb-2  font-semibold">Date & Time: {taskItem.dateTime}</p>
          <div className="flex">
            <Button text="Delete task" onClick={() => handleDelete(taskItem)} type="bg-red-500" />
            <Button text="Edit task" onClick={handleEdit} type="bg-blue-500" />
          </div>
        </>
      )}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p className="mb-2 px-3 mt-2 font-semibold bg-red-300 rounded-md">
            Are you sure you want to delete this task?
          </p>
          <div className="flex">
            <Button text="Yes" onClick={confirmDelete} type="bg-red-500" />
            <Button text="No" onClick={cancelDelete} type="bg-cyan-500" />
          </div>
        </div>
      )}
    </div>
  )
}

TaskItem.propTypes = {
  taskItem: PropTypes.shape({
    task: PropTypes.string,
    dateTime: PropTypes.string,
  }).isRequired,
  taskList: PropTypes.array.isRequired,
  setTaskList: PropTypes.func.isRequired,
}

export default TaskItem
