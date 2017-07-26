import React from 'react'
import Player from './Player'
import Game from './Game'
import Cheatsheet from './Cheatsheet'
import quizzService from '../services/quizzService'
import Modal from './Modal'

class Fight extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentQuizz: {},
      levelId: props.location.state.levelId,
      playerHealth: 100,
      opponentHealth: 100,
      gameMode: props.match.path.split('/').pop(),
      level: props.match.params.level,
      winner: '',
      started: false
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.getNextQuestion();
    this.setState({started: true, opponentHealth: 100, playerHealth: 100});
    this.newTime();
  }

  newTime() {
    this.opponentInterval = setInterval(()=> {
      let playerHealth = this.state.playerHealth;

      if (quizzService.randomRange(1, 10) > 6) {
        playerHealth -= 10;

        if (playerHealth <= 0) {
          clearInterval(this.opponentInterval);          
          this.setState({playerHealth, winner: 'You Lose'});
          $('#modal2').modal('open');
          return;
        }

        this.setState({playerHealth});
      }

      clearInterval(this.opponentInterval);
      this.newTime();
     }, quizzService.randomRange(1000,4000));
  }

  handleNextQuestion(isCorrectAnswer) {
    let opponentHealth = this.state.opponentHealth;

    if (isCorrectAnswer) {
      opponentHealth -= 10;

      if (opponentHealth <= 0) {
        clearInterval(this.opponentInterval);
        this.setState({opponentHealth, winner: 'You Win'});
        $('#modal2').modal('open');
        return;
      }

      this.setState({opponentHealth});      
    }

    this.getNextQuestion();
  }

  getNextQuestion() {        
    const question = quizzService.getQuestion(this.props.location.state.levels, this.state.levelId, this.state.currentQuizz.questionId);
    this.setState({
      currentQuizz: question,
    });
  }

  componentWillMount() {
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-fight");              
  }

  componentWillUnmount() {
      document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-fight");      
  }   

  render() {    
    return <div className="spar">
      <div className="row center-align spar-title">
        <h3 className='pink-text text-accent-2'>{this.state.gameMode}</h3>
        <p className="flow-text text-darken-4">{this.state.level}</p>
      </div>
      <div className="row"> 
        <div className="col s5">
          <Player avatar={this.props.location.state.user.img} name={this.props.location.state.user.username} health={this.state.playerHealth} />
        </div>
        <div className="col s5 offset-s2">
          <Player avatar={`/images/${this.state.gameMode}-200-${this.props.location.state.levels[this.state.levelId-1].belt}.png`} name={this.props.location.state.levels[this.state.levelId-1].opponents[this.state.gameMode]} health={this.state.opponentHealth} />
        </div>        
      </div>
      <div className="game-container center-align">
        <div className="row">
          <button disabled={this.state.started} className="btn waves-effect waves-light grey darken-1" onClick={this.startGame}>Start</button> 
        </div>        
        {this.state.gameMode === 'spar'
            ? <button className="btn waves-effet waves-light grey darken-1" data-target="modal1">Cheatsheet</button>
            : ''
        }          
        {this.state.started 
          ? <Game quizz={this.state.currentQuizz} nextQuestion={this.handleNextQuestion} />         
          : ''
        }
      </div>            
      <Cheatsheet answers={this.props.location.state.levels.find((level)=>level.id === this.state.levelId)} />     
      <Modal winner={this.state.winner} startGame={this.startGame} />
    </div>
  }
}

export default Fight;