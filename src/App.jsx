import React, { useState } from 'react'
import './index.css'
import './App.css'
import { Button } from './Components/Button.jsx'
import TaskItem from './Components/TaskItem.jsx'

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
      const currentDate = new Date()
      const formattedDate = currentDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })
      const newId = `component-${Math.random().toString(16).slice(2)}`
      const newTask = {
        id: newId,
        task: task,
        dateTime: formattedDate,
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
    <div className="flex justify-center items-start h-screen bg-gray-200">
      <div className="w-140 h-100 flex flex-col items-center bg-white mt-8 rounded-md shadow-md">
        <h1 className="text-center text-4xl my-6 font-serif font-semibold text-gray-800">
          Todo list
        </h1>
        <div className="mb-6 flex items-center">
          <input
            className="border border-gray-400 px-4 py-3 mr-4 ml-2 rounded"
            onChange={(e) => setTask(e.target.value)}
            type="text"
            value={task}
          />
          <Button text="Add task" onClick={addTask} />
        </div>
        <div className="relative group rounded-lg w-64 my-3 bg-gray-200 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className="w-8 h-8 absolute right-0 -rotate-45 stroke-green-300 top-1.5 group-hover:rotate-0 duration-300"
          >
            <path
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
              className="svg-stroke-primary"
            />
          </svg>
          <select
            className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
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
        </div>
        <div>
          {taskList.map((taskItem) => (
            <TaskItem
              key={taskItem.id}
              taskItem={taskItem}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todolist
