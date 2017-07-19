import React from 'react'

class Player extends React.Component {   
  render() {      
    return <div className="card player center-align">
        <div className="card-image">
            <img src={this.props.avatar}/>            
        </div>
        <div className="card-content">
            <span className="flow-text">{this.props.name}</span>
        </div>
        <div className="card-action health red">
        </div>
    </div>
  }
}

export default Player;