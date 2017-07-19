import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './components/App'
import Train from './components/Train'
import Spar from './components/Spar'
import Fight from './components/Fight'
import './components/style.css'

render((
  <Router>
  <div>
    <Route exact path="/app/dojo" component={App}/>
    <Route exact path="/app/dojo/level/:level/train" component={Train}/>
    <Route exact path="/app/dojo/level/:level/spar" component={Spar}/>
    <Route exact path="/app/dojo/level/:level/fight" component={Fight}/>
  </div>
  </Router>
), document.getElementById('root'))