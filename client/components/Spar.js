import React from 'react'
import Player from './Player'
import Game from './Game'
import Cheatsheet from './Cheatsheet'
import profileData from '../api/profileData'
import questions from '../api/questions'
import levelData from '../api/levelData'

class Spar extends React.Component {  
  render() {    
    return <div className="spar">
      <div className="row center-align spar-title">
        <h3>Spar</h3>
        <p className="flow-text">{this.props.match.params.level}</p>
      </div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={profileData.img} name={profileData.username} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar="/images/classmate-200.svg" name="Karate Kid" />
        </div>        
      </div>
      <Game cheatsheet question={questions[0].question} answers={questions[0].answers} />
      <Cheatsheet answers={levelData.filter((level)=>{return level.title === this.props.match.params.level})} />    
    </div>
  }
}

export default Spar;