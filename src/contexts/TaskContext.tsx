import React, { createContext, useEffect, useState } from 'react'

import { Task } from '../models/Task'

import { get, save } from '../services/TaskService'

import { TaskContextType } from './TaskContextType'

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggle: () => {}
})

const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(get)

  useEffect(() => {
    save(tasks)
  }, [tasks])

  const addTask = (title: string) => {
    const task: Task = {
      id: tasks.length + 1,
      title,
      isDone: false
    }

    setTasks([...tasks, task])
  }

  const removeTask = (task: Task) => {
    const index = tasks.indexOf(task)

    setTasks(tasks.filter((_, i) => i !== index))
  }

  const toggle = (task: Task) => {
    const index = tasks.indexOf(task)

    tasks[index].isDone = !task.isDone

    setTasks([...tasks])
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggle
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
