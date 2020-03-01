import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainView from './views/mainview.js'

function App () {
  return (
    <Router className='App'>
      <div className='App'>
        <Switch>
          <Route path='/home' component={MainView} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
