import React from 'react'

class Game extends React.Component {  

  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(evt){
    let message ="Well done!";
    if (evt.target.innerHTML != this.props.quizz.correctAnswer) {
        message = `Correct answer was: ${this.props.quizz.correctAnswer}`;
    }
    //Materialize.Toast.removeAll();  did not work as documented
    Materialize.toast(message, 4000) // 4000 is the duration of the toast

    this.props.nextQuestion();
  }

  render() {    
    return <div className="game-container center-align"> 
        {this.props.cheatsheet
            ? <button className="btn waves-effet waves-light grey darken-1" data-target="modal1">Cheatsheet</button>
            : ''
        }          
        <p className="question flow-text">{this.props.quizz.question}</p>
        <div className="row answer-container">
            <div className="col s12 offset-m2 m4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[0]}</button>
            </div>
            <div className="col s12 m4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[1]}</button>
            </div>
            <div className="col s12 offset-m2 m4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[2]}</button>
            </div>
            <div className="col s12 m4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[3]}</button>
            </div>                                    
        </div>
    </div>
  }
}

export default Game;