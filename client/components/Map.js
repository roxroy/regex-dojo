import React from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'
import Profile from './Profile'
import NavLink from './NavLink'

class Map extends React.Component { 
  render() {    
    return <div>
        <div className="row">
          <div className="col offset-l2 s12 l8">
            <Profile profile={this.props.user} />
          </div>
        </div>                    
          <div className="row">
            {this.props.levels.map((obj, i) => {
              return <div className="col s12 m6" key={i}>
                <Level level={obj.title} levelId={obj.id} description={obj.description} pic={obj.picture} />
              </div>
            })}
          </div>      
    </div>
  }
}

export default Map;