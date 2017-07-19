import React from 'react'
import Player from './Player'
import Game from './Game'
import profileData from '../api/profileData'
import questions from '../api/questions'

class Fight extends React.Component {  
  render() {    
    return <div className="spar">
      <div className="row center-align spar-title">
        <h3>Fight</h3>
        <p className="flow-text">{this.props.match.params.level}</p>
      </div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={profileData.img} name={profileData.username} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar="/images/enemy-200.svg" name="Bad Guy" />
        </div>        
      </div>
      <Game question={questions[0].question} answers={questions[0].answers} />    
    </div>
  }
}

export default Fight;