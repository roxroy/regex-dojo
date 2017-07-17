import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory} from 'react-router';
import {Route, IndexRoute} from 'react-router';
import App from './components/App'
import Train from './components/Train'
import Spar from './components/Spar'
import Fight from './components/Fight'
import './components/style.css'

render((
  <Router history={browserHistory}>
    <Route path="/app/dojo" component={App}/>
    <Route path="/train" component={Train}/>
    <Route path="/spar" component={Spar}/>
    <Route path="/fight" component={Fight}/>
  </Router>
), document.getElementById('root'))