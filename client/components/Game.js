import React from 'react'

class Game extends React.Component {  
  render() {    
    return <div className="game-container center-align">      
        <p className="question flow-text">{this.props.question}</p>
        <div className="row answer-container">
            <div className="col s12 offset-m2 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.answers[0]}</button>
            </div>
            <div className="col s12 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.answers[1]}</button>
            </div>
            <div className="col s12 offset-m2 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.answers[2]}</button>
            </div>
            <div className="col s12 m4">
                <button className="btn waves-effet waves-light pink accent-2">{this.props.answers[3]}</button>
            </div>                                    
        </div>
    </div>
  }
}

export default Game;