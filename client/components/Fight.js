import React from 'react'
import Player from './Player'
import Game from './Game'
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
      levelId: props.location.state.levelId
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
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
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-fight");      
    this.getNextQuestion();
  }

  componentWillUnmount() {
    document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-fight");      
  }  

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
      <Game 
        quizz={this.state.currentQuizz}
        nextQuestion={this.handleNextQuestion} 
      />    
    </div>
  }
}

export default Fight;