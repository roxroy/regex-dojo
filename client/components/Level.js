import React from 'react'
import { Link } from 'react-router-dom'

class Level extends React.Component {
  render() {
    return <div className="card level">
        {this.props.locked 
            ? <div className="level-locked valign-wrapper">
                <i className="material-icons teal-text text-accent-2 ">lock_outline</i>
              </div>  
            : ''
        }       
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.pic}/>           
        </div>
        <div className="card-content grey lighten-5">
            <span className="card-title activator grey-text text-darken-4">{this.props.level}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-action grey lighten-5">
            <Link className="btn waves-effect waves-light pink accent-2" to={{pathname: `/app/dojo/level/${this.props.level}/train`, state: {levelId: this.props.levelId}}}>Train</Link>
            <Link className="btn waves-effect waves-light pink accent-2" to={{pathname: `/app/dojo/level/${this.props.level}/spar`, state: {levelId: this.props.levelId}}}>Spar</Link>
            <Link className="btn waves-effect waves-light pink accent-2" to={{pathname: `/app/dojo/level/${this.props.level}/fight`, state: {levelId: this.props.levelId}}}>Fight</Link>
        </div>
        <div className="card-reveal teal lighten-3">
            <span className="card-title pink-text text-accent-2">{this.props.level}<i className="material-icons right">close</i></span>
            <p>{this.props.description}</p>
        </div>
    </div>       
  }
}

export default Level;