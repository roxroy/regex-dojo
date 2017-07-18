import React from 'react'
import Scroll from './Scroll'

class Cheatsheet extends React.Component {
  render() {
    var levels = this.props.location.state.levels;
    
    return <Scroll>
      <div className="row">
        {levels.map(function(obj, i){
          return <div key={i} className="col s12 m6">
            {obj.title}
          </div>
        })}
      </div>
    </Scroll>
  }
}

export default Cheatsheet;