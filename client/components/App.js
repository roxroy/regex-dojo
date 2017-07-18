import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from './Scroll'
import Level from './Level'
import Profile from './Profile'
import NavLink from './NavLink'
import profileData from '../api/profileData'
import levelData from '../api/levelData'

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      loading: true
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({levels: levelData, profile: profileData, loading: false}), 600);    
  }

  render() {
    if (!this.state.loading) document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-folded");
    return <div>
        <div className="row">
          <div className="col offset-l3 s12 l6">
            <Profile profile={this.state.profile} />
          </div>
        </div>
        <div className="card-panel teal lighten-2">
          <h4 className="white-text center-align">
           <Link to={{ pathname: '/app/dojo/cheatsheet', state: {levels: this.state.levels} }}>Cheatsheet</Link>
          </h4>
        </div>
            
        <Scroll>
          <div className="row">
            {this.state.levels.map(function(obj, i){
              return <div className="col s12 m6" key={i}>
                <Level level={obj.title} description={obj.description} pic={obj.picture}/>
              </div>
            })}
          </div>
        </Scroll>
    </div>
  }
}

export default App;