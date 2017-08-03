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
            {this.props.levels.map((level, i) => {
              return <div className="col s12 m6" key={i}>
                {i == 0 || this.props.user.fightData.belts.indexOf(this.props.levels[i-1].belt) > -1
                  ? <Level level={level.title} levelId={i} description={level.description} pic={level.picture} />
                  : <Level locked level={level.title} levelId={i} description={level.description} pic={level.picture} />
                }
              </div>
            })}
          </div>      
    </div>
  }
}

export default Map;