import React, { useContext } from 'react'

import { TaskContext } from '../contexts/TaskContext'
import { TaskContextType } from '../contexts/TaskContextType'

import { Task } from '../models/Task'

interface TaskListItemProps {
  task: Task
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const { toggle, removeTask } = useContext<TaskContextType>(TaskContext)

  const handleChangeCheckbox = () => toggle(task)

  const handleOnRemove = (task: Task) => removeTask(task)

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            type="checkbox"
            className="uk-checkbox"
            checked={task.isDone}
            onChange={handleChangeCheckbox}
          />
        </label>
      </td>
      <td className="uk-width-expand">{task.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => handleOnRemove(task)}
        />
      </td>
    </tr>
  )
}

export default TaskListItem
