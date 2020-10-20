import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <BrowserRouter>
        <Navbar />
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTask />
            </Route>
            <Route path="/">
              <h4>My tasks</h4>
              <TaskList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </BrowserRouter>
  )
}

export default Routes
