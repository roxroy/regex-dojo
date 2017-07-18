import React from 'react'
import Scroll from './Scroll'

class Cheatsheet extends React.Component {
  render() {
    return (<div>
          <div className="card horizontal">
           <h2>Cheatsheet</h2>
            <Scroll>
              <div className="row">
                {this.props.route.state.map(function(obj, i){
                  return <div key={i} className="col s12 m6">
                    {obj.title}
                  </div>
                })}
              </div>
            </Scroll>
          </div>   
        </div>)
  }
}

export default Cheatsheet;