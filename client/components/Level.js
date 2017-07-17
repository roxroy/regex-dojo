import React from 'react'

class Level extends React.Component {
  render() {
    return <div className="card level-card">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.pic}/>
        </div>
        <div claclassNames="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.level}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-action">
            <a className="btn waves-effect waves-light teal accent-4" href="#">Train</a>
            <a className="btn waves-effect waves-light teal accent-4" href="#">Spar</a>
            <a className="btn waves-effect waves-light teal accent-4" href="#">Fight</a>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.level}<i className="material-icons right">close</i></span>
            <p>{this.props.description}</p>
        </div>
    </div>       
  }
}

export default Level;