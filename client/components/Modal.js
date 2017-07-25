import React from 'react'

class Modal extends React.Component {  
    componentDidMount() {
        $('.modal').modal();
    }
    render() {    
        return <div id="modal2" className="modal teal lighten-3">
            <div className="modal-content">
                <h4 className="pink-text text-accent-2">{this.props.winner}</h4>
            </div>
            <div className="divider"></div>
            <div className="modal-footer teal lighten-3">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat pink-text text-accent-2">Close</a>
            </div>
    </div>    
  }
}

export default Modal;