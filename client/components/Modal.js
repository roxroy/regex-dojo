import React from 'react'
import { Link } from 'react-router-dom'

class Modal extends React.Component {  
    render() {    
        return <div id="modal2" className="modal teal lighten-3">
            <div className="modal-content">
                <h4 className="pink-text text-accent-2">{this.props.modalHeader}</h4>
                <p>{this.props.modalContent}</p>
            </div>
            <div className="divider"></div>
            <div className="modal-footer teal lighten-3">
                <Link to="/app/dojo" className="modal-action modal-close waves-effect waves-green btn-flat pink-text text-accent-2">Finish</Link>
                <button className="modal-action modal-close waves-effect waves-green btn-flat pink-text text-accent-2" onClick={this.props.startGame}>Play Again</button>
            </div>
    </div>    
  }
}

export default Modal;