import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory} from 'react-router';
import {Route, IndexRoute} from 'react-router';
import App from './components/App'
import Home from './components/Home'
import Train from './components/Train'
import Fight from './components/Fight'
import './components/style.css'

render((
  <Router history={browserHistory}>
    <Route path="/dashboard" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/train" component={Train}/>
      <Route path="/fight" component={Fight}/>
    </Route>
  </Router>
), document.getElementById('root'))