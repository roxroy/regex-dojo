import React from 'react'
import { Link } from 'react-router-dom'

class Level extends React.Component {
  render() {
    return <div className="card level">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.pic}/>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.level}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-action">
            <Link className="btn waves-effect waves-light teal accent-4" to={`/app/dojo/level/${this.props.level}/train`}>Train</Link>
            <Link className="btn waves-effect waves-light teal accent-4" to={`/app/dojo/level/${this.props.level}/spar`}>Spar</Link>
            <Link className="btn waves-effect waves-light teal accent-4" to={`/app/dojo/level/${this.props.level}/fight`}>Fight</Link>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.level}<i className="material-icons right">close</i></span>
            <p>{this.props.description}</p>
        </div>
    </div>       
  }
}

export default Level;