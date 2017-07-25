import React from 'react'

class Game extends React.Component {  

  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(evt){
    let message = '';

    let isCorrectAnswer = evt.target.innerHTML === this.props.quizz.correctAnswer;
    if (!isCorrectAnswer) {
        message = `Correct answer was: ${this.props.quizz.correctAnswer}`;
        Materialize.toast(message, 2000, 'red');
    }
    else {
        message = 'Well done!';
        Materialize.toast(message, 2000, 'green');
    }

    this.props.nextQuestion(isCorrectAnswer);
  }

  render() {    
    return <div>     
        <p className="question flow-text grey-text text-darken-4">{this.props.quizz.question}</p>
        <div className="row answer-container">
            <div className="col offset-s2 s4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[0]}</button>
            </div>
            <div className="col s4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[1]}</button>
            </div>
            <div className="col offset-s2 s4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[2]}</button>
            </div>
            <div className="col s4">
                <button onClick={this.checkAnswer} className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[3]}</button>
            </div>                                    
        </div>
    </div>
  }
}

export default Game;