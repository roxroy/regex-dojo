import React from 'react'

class Cheatsheet extends React.Component {  
    render() {    
        return <div id="modal1" className="modal bottom-sheet teal lighten-3">
            <div className="modal-content">
                <h4 className="pink-text text-accent-2">Cheatsheet</h4>
                <table>
                    <tbody>
                        {this.props.answers.map(function(answer, i) {
                            return <tr key={i}>
                                <th>{answer.meta}</th>
                                <td>{answer.description}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
    </div>    
  }
}

export default Cheatsheet;