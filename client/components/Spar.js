import React from 'react'
import Player from './Player'
import profileData from '../api/profileData'

class Spar extends React.Component {  
  render() {    
    return <div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={profileData.img} name={profileData.username} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar="/images/classmate.svg" name="Karate Kid" />
        </div>        
      </div>
      <h3>{this.props.match.params.level}</h3>
    </div>
  }
}

export default Spar;