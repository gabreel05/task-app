import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { TaskContext } from '../contexts/TaskContext'
import { TaskContextType } from '../contexts/TaskContextType'

interface AddTaskForm {
  title: string
}

const schema = Yup.object().shape({
  title: Yup.string().required()
})

const AddTask: React.FC = () => {
  const { addTask } = useContext<TaskContextType>(TaskContext)

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: AddTaskForm, e: any) => {
    addTask(data.title)

    e.target.reset()

    window.location.href = '/'
  }

  return (
    <form onSubmit={handleSubmit<AddTaskForm>(onSubmit)}>
      <h4>New Task</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="New Task"
          className="uk-input"
          ref={register}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Save
        </button>
      </div>
    </form>
  )
}

export default AddTask
