import React, { useState } from 'react'
import './index.css'
import './App.css'
import Button from './components/Button.jsx'
import TaskItem from './components/TaskItem.jsx'

const SortTypes = {
  RECENT_DATE: 'RecentDate',
  OLD_DATE: 'oldDate',
  ALPHABETICAL_AZ: 'az',
  ALPHABETICAL_ZA: 'za',
}

function Todolist() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [sortType, setSortType] = useState(SortTypes.RECENT_DATE)

  function addTask() {
    if (task.trim() !== '') {
      const currentDate = new Date().toLocaleString()
      const newId = `component-${Math.random().toString(16).slice(2)}`
      const newTask = {
        id: newId,
        task: task,
        dateTime: currentDate,
      }
      const updatedTaskList = [...taskList, newTask]
      setTaskList(updatedTaskList)
      setTask('')
      sortTasks(sortType, updatedTaskList)
    }
  }

  function sortTasks(sortType, updateTasklist) {
    const sortedTasks = [...updateTasklist]
    if (sortType === SortTypes.RECENT_DATE) {
      sortedTasks.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
    } else if (sortType === SortTypes.OLD_DATE) {
      sortedTasks.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    } else if (sortType === SortTypes.ALPHABETICAL_AZ) {
      sortedTasks.sort((a, z) => customAlphabeticalSort(a.task, z.task))
    } else if (sortType === SortTypes.ALPHABETICAL_ZA) {
      sortedTasks.sort((a, z) => customAlphabeticalSort(z.task, a.task))
    }

    setTaskList(sortedTasks)
  }

  function customAlphabeticalSort(strA, strB) {
    const lowerA = strA.toLowerCase()
    const lowerB = strB.toLowerCase()
    return lowerA.localeCompare(lowerB)
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
          <label>Sort tasks by : </label>
          <select
            className=" mx-2"
            name="tasks"
            value={sortType}
            onChange={(e) => {
              setSortType(e.target.value)
              sortTasks(e.target.value, taskList)
            }}
          >
            <option value={SortTypes.RECENT_DATE}>Newest</option>
            <option value={SortTypes.OLD_DATE}>Oldest</option>
            <option value={SortTypes.ALPHABETICAL_AZ}>Alphabetically A-Z</option>
            <option value={SortTypes.ALPHABETICAL_ZA}>Alphabetically Z-A</option>
          </select>
          <div>
            {taskList.map((taskItem, index) => (
              <TaskItem
                key={taskItem.id}
                taskItem={taskItem}
                taskList={taskList}
                setTaskList={setTaskList}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todolist
