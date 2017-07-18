import React from 'react'
import Scroll from './Scroll'
import CheatsheetItem from './CheatsheetItem'

class Cheatsheet extends React.Component {
  render() {
    var levels = this.props.location.state.levels;

     return <div>
      <div className="row">
        {levels.map(function(obj, i){
          return <div key={i} className="col s12">
            <div className="card level-card">
              <div className="card-content">
                  <span className="card-title grey-text text-darken-4">{obj.title}</span>
              </div>
              <div className="card-action1">
                <CheatsheetItem techniques={obj.techniques} />
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  }
}

export default Cheatsheet;