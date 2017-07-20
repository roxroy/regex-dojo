import React from 'react'
import Player from './Player'
import Game from './Game'
import Cheatsheet from './Cheatsheet'
import profileData from '../api/profileData'
import questions from '../api/questions'
import levelData from '../api/levelData'
import quizzService from '../services/quizzService'

class Spar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      currentQuizz: {},
      quizzCount: 1,
      MAX_QUIZZ: 10,
    };
  }
  
  componentWillMount() {
    const question = quizzService.getQuestion(levelData, this.props.match.params.level);
    this.setState({
      currentQuizz : question,
    });
  }

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
      <Game cheatsheet quizz={this.state.currentQuizz} />
      <Cheatsheet answers={levelData.filter((level)=>{return level.title === this.props.match.params.level})} />    
    </div>
  }
}

export default Spar;