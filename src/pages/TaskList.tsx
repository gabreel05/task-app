import React, { useContext } from 'react'

import { TaskContext } from '../contexts/TaskContext'
import { TaskContextType } from '../contexts/TaskContextType'

import TaskListItem from '../components/TaskListItem'

const TaskList: React.FC = () => {
  const { tasks } = useContext<TaskContextType>(TaskContext)

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map(task => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskList
