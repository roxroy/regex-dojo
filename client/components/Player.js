import React from 'react'

class Player extends React.Component {   
  render() {      
    return <div className="card player">
        <div className="card-image">
            <img src={this.props.avatar}/>            
        </div>
        <div className="card-content">
            <span className="card-title">{this.props.name}</span>
        </div>
        <div className="card-action health">
        </div>
    </div>
  }
}

export default Player;