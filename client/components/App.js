import React from 'react'
import NavLink from './NavLink'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="black" role="navigation">
          <ul role="nav">
            <li><NavLink to="/dashboard" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/train">Train</NavLink></li>
            <li><NavLink to="/fight">Fight</NavLink></li>
            <li><NavLink to="/logout">logout</NavLink></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default App;