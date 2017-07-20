import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Scroll from './components/Scroll'
import './components/style.css'

render((
  <Router>
  <div>    
    <Route path="/app/dojo" component={Scroll}/>
  </div>
  </Router>
), document.getElementById('root'))