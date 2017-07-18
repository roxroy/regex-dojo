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
    <Route exact path="/app/dojo" component={App}/>
    <Route exact path="/app/dojo/train" component={Train}/>
    <Route exact path="/app/dojo/spar" component={Spar}/>
    <Route exact path="/app/dojo/fight" component={Fight}/>
    <Route exact path="/app/dojo/cheatsheet" component={Cheatsheet}/>
  </div>
  </Router>
), document.getElementById('root'))