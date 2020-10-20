import { Task } from '../models/Task'

const TASK_STORE = 'tasks'

export const get = (): Task[] => {
  const data = localStorage.getItem(TASK_STORE) || ''

  try {
    const result = JSON.parse(data) as Task[]

    return result
  } catch {
    return []
  }
}

export const save = (data: Task[]) => {
  if (data?.length >= 1) {
    localStorage.setItem(TASK_STORE, JSON.stringify(data))
  }
}
