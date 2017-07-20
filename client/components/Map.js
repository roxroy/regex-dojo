import React from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'
import Profile from './Profile'
import NavLink from './NavLink'
import profileData from '../api/profileData'
import levelData from '../api/levelData'

class Map extends React.Component { 
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
          <div className="col offset-l2 s12 l8">
            <Profile profile={this.state.profile} />
          </div>
        </div>                    
          <div className="row">
            {this.state.levels.map(function(obj, i){
              return <div className="col s12 m6" key={i}>
                <Level level={obj.title} levelId={obj.id} description={obj.description} pic={obj.picture}/>
              </div>
            })}
          </div>      
    </div>
  }
}

export default Map;