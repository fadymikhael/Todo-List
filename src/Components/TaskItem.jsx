import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Cancel, Save } from './Button' // Import des composants bouton, en supposant que CancelBtn est le bouton Cancel
import { EditIcon, BinIcon } from './IconComponent'

const TaskItem = ({ taskItem, taskList, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(taskItem.task)
  const taskTextStyle = {
    display: 'block',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    color: 'white',
  }
  const containerStyle = {
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    padding: '1rem',
    marginBottom: '1rem',
    marginInlineStart: '0.25rem',
    marginInlineEnd: '0.25rem',
    borderRadius: '0.375rem',
    maxWidth: '100%',
    boxSizing: 'border-box',
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setEditedTask(taskItem.task)
    setIsEditing(false)
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTaskList(taskList.filter((item) => item.id !== taskItem.id))
    }
  }

  const handleSaveTask = () => {
    const updatedTasks = taskList.map((item) =>
      item.id === taskItem.id
        ? { ...item, task: editedTask, dateTime: new Date().toLocaleString() }
        : item
    )

    setTaskList(updatedTasks)
    setIsEditing(false)
  }

  function toggleTaskCompletion(taskId) {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTaskList(updatedTaskList)
  }

  return (
    <div style={containerStyle}>
      {isEditing ? (
        <>
          <input
            className="border border-black p-2 mb-3 rounded"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            type="text"
          />
          <div className="flex">
            {' '}
            {/* Conteneur flex pour placer les boutons côte à côte */}
            <Save text="Save Task" onClick={handleSaveTask} />
            <Cancel text="Cancel" onClick={handleCancel} />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <p
              style={{
                ...taskTextStyle,
                textDecoration: taskItem.isCompleted ? 'line-through' : 'none',
                color: taskItem.isCompleted ? 'black' : 'white',
              }}
              className={`ml-2`}
            >
              {taskItem.task}
            </p>
          </div>
          <p className="mb-2 font-semibold">Date & Time: {taskItem.dateTime}</p>
          <div className="flex">
            <BinIcon onClick={handleDelete} />
            <EditIcon onClick={handleEdit} />
            <label className="custom-checkbox">
              <input
                name="dummy"
                type="checkbox"
                checked={taskItem.isCompleted}
                onChange={() => toggleTaskCompletion(taskItem.id)}
              />
              <span className="checkmark" />
            </label>
          </div>
        </>
      )}
    </div>
  )
}

TaskItem.propTypes = {
  taskItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    task: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool,
  }).isRequired,
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTaskList: PropTypes.func.isRequired,
}

export default TaskItem
