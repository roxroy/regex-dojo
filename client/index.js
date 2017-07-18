import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './components/App'
import Train from './components/Train'
import Spar from './components/Spar'
import Fight from './components/Fight'
import Cheatsheet from './components/Cheatsheet'
import './components/style.css'

render((
  <Router>
  <div>
    <Route path="/app/dojo" component={App}/>
    <Route path="/train" component={Train}/>
    <Route path="/spar" component={Spar}/>
    <Route path="/fight" component={Fight}/>
    <Route path="/cheatsheet" component={Cheatsheet}/>
  </div>
  </Router>
), document.getElementById('root'))