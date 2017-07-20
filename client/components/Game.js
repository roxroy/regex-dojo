import React from 'react'

class Game extends React.Component {  
  render() {    
    return <div className="game-container center-align"> 
        {this.props.cheatsheet
            ? <button className="btn waves-effet waves-light grey darken-1" data-target="modal1">Cheatsheet</button>
            : ''
        }          
        <p className="question flow-text">{this.props.quizz.question}</p>
        <div className="row answer-container">
            <div className="col s12 offset-m2 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[0]}</button>
            </div>
            <div className="col s12 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[1]}</button>
            </div>
            <div className="col s12 offset-m2 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[2]}</button>
            </div>
            <div className="col s12 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.quizz.answers[3]}</button>
            </div>                                    
        </div>
    </div>
  }
}

export default Game;