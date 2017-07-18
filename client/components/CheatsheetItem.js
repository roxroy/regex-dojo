import React from 'react'

class CheatsheetItem extends React.Component {
  render() {
    return <table className="striped responsive-table">
        <tbody>
        {this.props.techniques.map(function(obj, i){
          return <tr key={i}>
          <td>{obj.meta}</td>
          <td>{obj.description}</td>            
          </tr>
        })}
        </tbody>
    </table>
  }
}

export default CheatsheetItem;