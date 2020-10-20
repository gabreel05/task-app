import React from 'react'

import TaskProvider from './contexts/TaskContext'

import Routes from './routes'

export default function App() {
  return (
    <TaskProvider>
      <Routes />
    </TaskProvider>
  )
}
