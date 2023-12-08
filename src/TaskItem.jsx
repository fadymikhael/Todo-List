import React from 'react'
import Button from './Button.jsx'
import PropTypes from 'prop-types'

const TaskItem = ({
  taskItem,
  index,
  editIndex,
  editedTask,
  setEditedTask,
  saveTask,
  confirmDeleteTask,
  editTask,
}) => {
  return (
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
            <Button text="Delete task" onClick={() => confirmDeleteTask(index)} type="bg-red-500" />
            <Button text="Edit task" onClick={() => editTask(index)} type="bg-blue-500" />
          </div>
        </>
      )}
    </div>
  )
}

TaskItem.propTypes = {
  taskItem: PropTypes.shape({
    task: PropTypes.string,
    dateTime: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  editIndex: PropTypes.number.isRequired,
  editedTask: PropTypes.string.isRequired,
  setEditedTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  confirmDeleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
}

export default TaskItem
