import React from 'react'

class Cheatsheet extends React.Component {  
    componentDidMount() {
        $('.modal').modal();
    }
    render() {    
        return <div id="modal1" className="modal bottom-sheet teal lighten-3">
            <div className="modal-content">
                <h4 className="pink-text text-accent-2">{this.props.answers.title}</h4>
                <table>
                    <tbody>
                        {this.props.answers.techniques.map(function(answer, i) {
                            return <tr key={i}>
                                <th>{answer.meta}</th>
                                <td>{answer.description}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="divider"></div>
            <div className="modal-footer teal lighten-3">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat pink-text text-accent-2">Close</a>
            </div>
    </div>    
  }
}

export default Cheatsheet;