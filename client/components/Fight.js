import React from 'react'
import Player from './Player'
import Game from './Game'
import Cheatsheet from './Cheatsheet'
import profileData from '../api/profileData'
import levelData from '../api/levelData'
import quizzService from '../services/quizzService'

class Fight extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentQuizz: {},
      quizzCount: 1,
      MAX_QUIZZ: 10,
      levelId: props.location.state.levelId,
      health: 100,
      gameMode: props.match.path.split('/').pop(),
      level: props.match.params.level
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }

  startGame() {
    this.getNextQuestion();
    this.newTime();
  }

  newTime() {
    this.opponentInterval = setInterval(()=> {
      if (quizzService.randomRange(1, 10) > 6) this.setState({health: this.state.health-10});
      clearInterval(this.opponentInterval);
      this.newTime();
     }, quizzService.randomRange(500,2000));
  }

  handleNextQuestion(isCorrectAnswer) {
    let adjanceQuizzCount = this.state.quizzCount
    this.setState({
      quizzCount : adjanceQuizzCount,
    });
    this.getNextQuestion();
  }

  getNextQuestion() {        
    const question = quizzService.getQuestion(levelData, this.state.levelId, this.state.currentQuizz.questionId);
    this.setState({
      currentQuizz : question,
    });
  }

  componentWillMount() {
    this.startGame();
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-fight");              
  }

  componentWillUnmount() {
      document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-fight");      
  }   

  render() {    
    return <div className="spar">
      <div className="row center-align spar-title">
        <h3>{this.state.gameMode}</h3>
        <p className="flow-text">{this.state.level}</p>
      </div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={profileData.img} name={profileData.username} health={this.state.health} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar={levelData[0].opponent[this.state.gameMode].img} name={levelData[0].opponent[this.state.gameMode].name} health={this.state.health} />
        </div>        
      </div>
      <Game cheatsheet={this.state.gameMode === 'spar'}
        quizz={this.state.currentQuizz}
        nextQuestion={this.handleNextQuestion} 
      />   
      <Cheatsheet answers={levelData.find((level)=>level.title === this.props.match.params.level)} />     
    </div>
  }
}

export default Fight;