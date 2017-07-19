import React from 'react'
import Player from './Player'
import Game from './Game'
import profileData from '../api/profileData'

var questions = [
  {
    question: 'Match any character, 0 or more',
    answers: [
      'answer 1',
      'answer 2',
      'answer 3',
      'answer 4'
    ]
  }
];

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
      <Game question={questions[0].question} answers={questions[0].answers} />    
    </div>
  }
}

export default Spar;